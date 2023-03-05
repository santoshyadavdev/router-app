import { inject, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanMatchFn,
  PreloadAllModules,
  Router,
  RouteReuseStrategy,
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalRouteService } from './local-route.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { ReuseRouter } from './resuse-router.service';
import { TitleService } from './title.service';

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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    data: {
      reuse: true,
    },
    runGuardsAndResolvers: 'paramsChange', // always run guards and resolvers
    // providers: [LocalRouteService],
    // title: 'Home'
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module'),
    // providers: [LocalRouteService]
    // title: 'Employee'
    canMatch: [authGuard],
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
    // providers: [LocalRouteService]
    canActivate: [authGuard],
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
