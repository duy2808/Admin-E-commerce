import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../view-models/book';
import { GenreService } from '../services/genre.service';
import { Genre } from '../view-models/genre';
import { Image } from '../view-models/image';
import { Size } from '../view-models/size';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  books: Book[];
  genres: Genre[];
  genre: Genre;
  selectedBook: Book = new Book();
  option: number;
  showSpinner: boolean = true;
  public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    private popped = [];

    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

    pushItem() {
      let item = this.popped.pop() || 'A newly-created meal!';
      this.books.push(item);
  }

  popItem() {
      this.popped.push(this.books.pop());
  }
  
  constructor(private bookService:BookService, private genreService: GenreService) { }

  ngOnInit() {
    this.getBooks();
    this.getGenres();
  }
  onSelect(book: Book): void {
    this.selectedBook = book;
    if (this.selectedBook.pages == null) {
      this.selectedBook.pages = 0;
      console.log(`null pages changed to ${this.selectedBook.pages}`)
    }
    if (this.selectedBook.weight == null) {
      this.selectedBook.weight = 0;
      console.log(`null weight changed to ${this.selectedBook.weight}`)
    }
    if (this.selectedBook.releaseDate == null) {
      // this.selectedBook.releaseDate = `${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`;
      this.selectedBook.releaseDate = '';
      console.log(`null date changed to ${this.selectedBook.releaseDate}`)
    }
    if (this.selectedBook.sku == null) {
      this.selectedBook.sku = 'No SKU';
      console.log(`null sku changed to ${this.selectedBook.sku}`)
    }
    if (this.selectedBook.images == null) {
      this.selectedBook.images = new Image();
    }
    if (this.selectedBook.size == null) {
      this.selectedBook.size = new Size();
    }
  }
 
  getBooks(): void {
    this.bookService.getBooks().subscribe(z => this.books = z);
    this.bookService.getBooks().subscribe(() => this.showSpinner = false);
  
  };
  getGenres(): void {
    this.genreService.getGenres().subscribe(_ => this.genres = _);
  };
  deleteBook(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteBook(book).subscribe();
  }
  updateBook(): void {
    this.bookService.updateBook(this.selectedBook)
      .subscribe();
  }
  compareFn(optionOne: Genre, optionTwo: Genre): boolean {
    return optionOne._id == optionTwo._id;
  }
}
