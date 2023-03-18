import { fakeAsync, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import {
  RouterTestingHarness,
} from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideLocationMocks } from '@angular/common/testing';
import HomeComponent from './home/home.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      providers: [
        provideRouter([
          {
            path: 'home',
            loadComponent: () => import('./home/home.component'),
          },
          {
            path: 'about',
            loadComponent: () => import('./about/about.component'),
          },
        ]),
        provideLocationMocks(),
      ],
    }).compileComponents();
  });

  it('should redirect to home', fakeAsync(async () => {
    const harness = await RouterTestingHarness.create();
    const router = TestBed.inject(Router);
    await harness.navigateByUrl('home');
    expect(router.url).toEqual('/home');
    expect(harness.routeNativeElement?.innerHTML).toContain('home');
  }));

  it('should redirect to about', fakeAsync(async () => {
    const harness = await RouterTestingHarness.create();
    const router = TestBed.inject(Router);
    await harness.navigateByUrl('about');
    expect(router.url).toEqual('/about');
    expect(harness.routeNativeElement?.innerHTML).toContain('about');
  }));

  it('should redirect to HomeComponent Instance', fakeAsync(async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('home');
    expect(component).toBeInstanceOf(HomeComponent);
  }));
});
