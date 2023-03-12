import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private viewportScroller: ViewportScroller,
    private activatedRoute: ActivatedRoute
  ) {}

  scrollToAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  scroll() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.scrollToAnchor(fragment);
      } else {
        this.scrollToTop();
      }
    });
  }
}
