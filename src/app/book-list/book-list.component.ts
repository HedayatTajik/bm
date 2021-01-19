import { Book } from './../shared/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bs: BookStoreService) {}
  ngOnInit(): void {
    this.bs.getAll().pipe(delay(1000)).subscribe(res => this.books = res)
  }
}
