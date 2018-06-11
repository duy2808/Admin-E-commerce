import { Component, OnInit } from '@angular/core';
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

  constructor(private bookService: BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getGenre();
    
  }
  getGenre(): void {
    this.genreService.getGenres().subscribe(__ => this.genres = __)
  }
  addBook(): void {
  
 
    this.bookService.addBook(this.objectBook).subscribe(_=> {
      console.log(_);
    });
  }
}
