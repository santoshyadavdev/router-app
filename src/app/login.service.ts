import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor() { }

  login(userName: string, password: string): boolean {
    if (userName === 'admin' && password === 'admin') {
      return this.isLoggedIn = true;
    }
    return this.isLoggedIn = false;
  }

}
