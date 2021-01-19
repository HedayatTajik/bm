import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  books: Book[];
  constructor(private http: HttpClient) {}
  private api: string = 'https://api4.angular-buch.com';

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.api + '/books');
  }

  getsingle(isbn: string): Observable<Book> {
    return this.http.get<any>(this.api + '/books/' + isbn);
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(this.api + '/books/' + isbn, {
      responseType: 'text',
    });
  }
}
