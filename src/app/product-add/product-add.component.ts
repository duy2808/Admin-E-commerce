import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../app-directive/forbidden-name.directive';
import { BookService } from '../services/book.service';
import { GenreService } from '../services/genre.service';
import { Book } from '../view-models/book';
import { Genre } from '../view-models/genre';
import { Image } from '../view-models/image';
import { Size } from '../view-models/size';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  genres: Genre[];
  objectBook: Book = new Book();

  // _id: string;
  // title: string;
  // shortDescription: string;
  // fullDescription: string;
  // author: string;
  // publisher: string;
  // pages: number;
  // weight: number;
  // sku: string;
  // previousPrice: number;
  // sellingPrice: number;
  // releaseDate: string;
  // images: Image;
  // size: Size;
  // genre: Genre;

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = {name: '', alterEgo: 'Dr. What', power: this.powers[0]};
  heroForm: FormGroup;

  constructor(private bookService: BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getGenre();
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4)
        // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });

  }
  get name() { return this.heroForm.get('name'); }
  get power() { return this.heroForm.get('power'); }

  getGenre(): void {
    this.genreService.getGenres().subscribe(__ => this.genres = __)
  }
  addBook(): void {
    this.bookService.addBook(this.objectBook).subscribe(_ => {
      console.log(_);
    });
  }
}
