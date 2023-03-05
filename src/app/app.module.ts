import { NgModule } from '@angular/core';
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
  provideRouter,
  RouteReuseStrategy,
  RouterModule,
  TitleStrategy,
  withDebugTracing,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app-routing.module';
import { ReuseRouter } from './resuse-router.service';
import { TitleService } from './title.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, MainNavComponent, LoginComponent],
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
    provideRouter(
      routes,
      // withDebugTracing(),
      //  withEnabledBlockingInitialNavigation()
      // withHashLocation(),
      withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      })
    ),
    {
      provide: RouteReuseStrategy,
      useClass: ReuseRouter,
    },
    {
      provide: TitleStrategy,
      useClass: TitleService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
