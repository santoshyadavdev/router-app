import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm !: FormGroup;

  constructor(private builder: FormBuilder, private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);

    if (this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)) {
      const user = this.loginForm.get('username')?.value as string;
      const extras: NavigationExtras = {
        queryParamsHandling: 'merge',
        preserveFragment: true
      };
      this.router.navigate(['/employee', { username: user }]);
    }

  }

}