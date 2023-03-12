import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './employee-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [provideRouter(routes)],
})
export default class EmployeeModule {}
