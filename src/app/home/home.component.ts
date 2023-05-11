import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { LocalRouteService } from '../local-route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() reuse : boolean =false;

  @Input() todoData = [];

  data$ = inject(HttpClient).get('https://jsonplaceholder.typicode.com/todos/1').pipe(
    tap(console.log)
  );

  constructor(private localRouter: LocalRouteService) {
    console.log('new instance of HomeComponent')
   }

  ngOnInit(): void {
    console.log('ngOnint for HomeComponent');
  }

}


