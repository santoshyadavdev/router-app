import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data$ = inject(HttpClient).get('https://jsonplaceholder.typicode.com/todos/1');

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnint for HomeComponent');
  }

}


