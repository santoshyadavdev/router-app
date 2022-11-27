import { Component } from '@angular/core';
import { of } from 'rxjs';
import { LocalRouteService } from 'src/app/local-route.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  employee$ = of<Employee[]>([
    {
      id: 1,
      name: 'John',
      salary: 1000,
      age: 30
    },
    {
      id: 2,
      name: 'Jane',
      salary: 2000,
      age: 40
    },
  ]);

  constructor(private localRoute: LocalRouteService) { }

  ngOnInit(): void {

  }
}
