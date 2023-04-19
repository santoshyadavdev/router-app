import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$ = inject(HttpClient).get('https://jsonplaceholder.typicode.com/todos/1').pipe(
    tap(console.log)
  );

  constructor() {
    console.log('new instance of HomeComponent')
   }

  ngOnInit(): void {
    console.log('ngOnint for HomeComponent');
  }

}


