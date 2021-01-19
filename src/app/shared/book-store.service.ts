import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';
@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  books: Book[];
  constructor(private http: HttpClient) {}
  private api: string = 'https://api4.angular-buch.com';

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(this.api + '/books').pipe(
      map((booksRaw) => booksRaw.map((b) => BookFactory.fromRaw(b))),
      catchError(this.errorHandler)
    );
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
    return this.http
      .get<BookRaw[]>(this.api + '/books' + /search/ + searchTerm)
      .pipe(
        map((booksRaw) => booksRaw.map((b) => BookFactory.fromRaw(b))),
        catchError(this.errorHandler)
      );
  }

  getsingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(this.api + '/books/' + isbn).pipe(
      map((b) => BookFactory.fromRaw(b)),
      retry(3),
      catchError(this.errorHandler)
    );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(this.api + '/books/' + isbn, {
      responseType: 'text',
    });
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.log('Errore');
    return throwError(error);
  }
}
