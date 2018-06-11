import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../view-models/book';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})


export class BookService {
  // books: Book[];
  private booksUrl = 'http://green-web-bookshop.herokuapp.com/api/books';

  constructor(private http: HttpClient) { }
  /** GET api-s from the server */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }
 
}
