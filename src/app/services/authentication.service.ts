import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor() { }


  isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  login(username: string, password: string): boolean {
  
    this.loggedIn.next(true);
    return true;
  }


  logout() {
    this.loggedIn.next(false);
  }
}
