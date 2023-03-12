import { Component } from '@angular/core';
import { of } from 'rxjs';
import { LocalRouteService } from 'src/app/local-route.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  employee$ = of<Employee[]>([
    // create 100 more employees
    ...Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Employee ${i + 1}`,
      salary: 1000 + i * 100,
      age: 30 + i,
    })),
    {
      id: 1,
      name: 'John',
      salary: 1000,
      age: 30,
    },
    {
      id: 2,
      name: 'Jane',
      salary: 2000,
      age: 40,
    },
    {
      id: 3,
      name: 'Bob',
      salary: 3000,
      age: 50,
    },
  ]);

  constructor(private localRoute: LocalRouteService) {}

  ngOnInit(): void {}
}
