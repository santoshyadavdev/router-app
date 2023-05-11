import { inject, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanMatchFn,
  PreloadAllModules,
  ResolveFn,
  Router,
  RouteReuseStrategy,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
  UrlSegment,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalRouteService } from './local-route.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { ReuseRouter } from './resuse-router.service';
import { TitleService } from './title.service';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HttpClient } from '@angular/common/http';

const todoData: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(HttpClient).get('https://jsonplaceholder.typicode.com/todos/1');
};

const authGuard: CanMatchFn = () => {
  console.log('authGuard');
  const authService = inject(LoginService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }

  return router.parseUrl('/login');
};

export const routes: Routes = [
  {
    path: 'paragraph',
    loadComponent: () => import('./achor-scroll/achor-scroll.component'),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    // canMatch: [authGuard],
    data: {
      reuse: true,
    },
    resolve: {
      todoData: todoData,
    },
    // runGuardsAndResolvers: 'paramsChange', // always run guards and resolvers
    providers: [LocalRouteService],
    title: 'Home',
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module'),
    providers: [LocalRouteService],
    title: 'Employee'
    // canMatch: [authGuard],
  },
  {
    path: 'user',
    data: {
      preload: true,
    },
    loadComponent: () => import('./user/user.component'),
    // providers: [LocalRouteService]
    // canMatch: [authGuard],
  },
  {
    matcher: (url) => {
      if (
        url.length === 2 &&
        url[0].path === 'verify' &&
        url[1].path.match(/\d/g)
      ) {
        return {
          consumed: url,
          posParams: {
            id: new UrlSegment(url[1].path.slice(0), {}),
          },
        };
      }

      return null;
    },
    component: VerifyEmailComponent,
    // title: 'Employee Details'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       // enableTracing: true,
//       // preloadingStrategy: PreloadAllModules,
//       // anchorScrolling: 'enabled',
//       // scrollPositionRestoration: 'top',
//       // initialNavigation: 'enabledNonBlocking' // bootstrap is not blocked
//       onSameUrlNavigation: 'reload',
//     }),
//   ],
//   providers: [
//     {
//       provide: TitleStrategy,
//       useClass: TitleService,
//     },
//     {
//       provide: RouteReuseStrategy,
//       useClass: ReuseRouter,
//     },
//   ],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
