import { ActivatedRoute, Router } from '@angular/router';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from './../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  constructor(
    private router: Router,
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const parms = this.route.snapshot.paramMap;
    this.bs.getsingle(parms.get('isbn')).subscribe((b) => (this.book = b));
  }
  getRating(num: number) {
    return new Array(num);
  }
  status: boolean = true;
  removeBook() {
    if (confirm('Buch löschen?')) {
      this.bs.remove(this.book.isbn).subscribe((res) => {
        this.router.navigate(['../', { relativeTo: this.route }]);
      });
    }
  }
}
