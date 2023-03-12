import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  {
    path:'',
    component: EmployeeComponent,
  },
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/\d/g)) {
        return {
          consumed: url,
          posParams: {
            employeeId: new UrlSegment(url[0].path.slice(0), {})
          }
        };
      }
  
      return null;
    },
    component: EmployeeDetailsComponent,
    // title: 'Employee Details'
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class EmployeeRoutingModule { }
