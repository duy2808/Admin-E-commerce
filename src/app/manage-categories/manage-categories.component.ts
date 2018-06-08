import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { GenreService } from '../services/genre.service';
import { Genre } from '../view-models/genre';
@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  heroes$: Observable<Genre[]>;
  private searchTerms = new Subject<string>();
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.genreService.searchHeroes(term)),
    );
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
