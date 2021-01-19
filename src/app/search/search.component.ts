import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyup$ = new Subject<string>();
  constructor() { }

  ngOnInit(): void {
    this.keyup$.subscribe(d => console.log(d))
  }

}
