import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent {


  modes$ = this.route.queryParamMap.pipe(
    map((params: ParamMap) => params.get('mode'))
  );
  userName$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('username'))
  );


  employeeId$ = this.route.paramMap
    .pipe(
      map((params: ParamMap) => params.get('employeeId'))
    );
  constructor(private route: ActivatedRoute) { }

}
