import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'router-app';

  // constructor(
  //   private router: Router,
  //   private viewportScroller: ViewportScroller
  // ) {
  //   router.events
  //     .pipe(filter((event: Event): event is Scroll => event instanceof Scroll))
  //     .subscribe((e) => {
  //       viewportScroller.scrollToPosition([0, 0]);
  //     });
  // }
}
