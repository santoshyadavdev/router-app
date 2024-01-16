import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  PreloadAllModules,
  PreloadingStrategy,
  provideRouter,
  Route,
  RouteReuseStrategy,
  RouterModule,
  TitleStrategy,
  withComponentInputBinding,
  withDebugTracing,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app-routing.module';
import { ReuseRouter } from './resuse-router.service';
import { TitleService } from './title.service';
import { Observable, of } from 'rxjs';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PreloadingStrategyService implements PreloadingStrategy {
  private preloadedModules: string[] = [];
  preload(route: Route, load: () => Observable<any>): Observable<unknown> {
    if (route.data && route.data['preload'] && route.path) {
      console.log(`PreLoad ${route.path}`);
      this.preloadedModules.push(route.path);
      return load();
    } else {
      return of(null);
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    LoginComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      // withDebugTracing(),
      // withEnabledBlockingInitialNavigation() //required for SSR
      // withHashLocation(),
      // withPreloading(PreloadAllModules)
      // withPreloading(PreloadingStrategyService),
      // withRouterConfig({
      //   onSameUrlNavigation: 'reload',
      // }),
      // withComponentInputBinding(),
      // withViewTransitions()
    ),
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: ReuseRouter,
    // },
    // {
    //   provide: TitleStrategy,
    //   useClass: TitleService,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
