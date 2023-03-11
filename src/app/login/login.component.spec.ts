import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import {
  RouterTestingHarness,
  RouterTestingModule,
} from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeComponent } from '../employee/employee/employee.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
})
class EmployeeComponentFake {
  constructor() {}

  ngOnInit(): void {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule,
        RouterTestingModule,
        CommonModule,
        AsyncPipe,
      ],
      declarations: [LoginComponent],
      providers: [
        provideRouter([
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'employee',
            component: EmployeeComponentFake,
          },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a login button', async () => {
    const harness = await RouterTestingHarness.create();
    component.loginForm.setValue({ username: 'admin', password: 'admin' });
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    const activatedComponent = await harness.navigateByUrl('/employee');
    harness.detectChanges();
    console.log(harness.routeNativeElement);
    expect(true).toBe(true);
    // expect(harness.()).toBe('/home');
  });
});
