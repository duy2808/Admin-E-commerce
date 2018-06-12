import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../view-models/book';
import { GenreService } from '../services/genre.service';
import { Genre } from '../view-models/genre';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  books: Book[];
  genres: Genre[];
  selectedBook: Book;
  selectedEdit: Book = new Book();
  selectedDelete: Book;
  constructor(private bookService:BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getBooks();
    this.getGenres();
  }
  onSelect(book): void {
    this.selectedBook = book;
  }
  onSelectEdit(book: Book = new Book()): void {
    this.selectedEdit = book;
  }
  onSelectDelete(book): void {
    this.selectedDelete = book;
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(z => this.books = z);
  };
  getGenres(): void {
    this.genreService.getGenres().subscribe(_ => this.genres = _);
  };
  deleteBook(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }
  updateBook():void{
    this.bookService.updateBook(this.selectedEdit)
      .subscribe();
  }
}
