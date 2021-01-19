import { BookStoreService } from './../shared/book-store.service';
import { Book } from './../shared/book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'],
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;
  constructor() {}

  ngOnInit(): void {}
}
