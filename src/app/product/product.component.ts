import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../view-models/book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  constructor(private bookService:BookService) { }

  ngOnInit() {
  }
  onSelect(book): void {
    this.selectedBook = book;
  }
  getBooks(): void {
    this.bookService.getBooks().subscribe(z => this.books = z);
  };
}
