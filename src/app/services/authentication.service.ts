import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  // Check if the user is logged in
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  // Log in the user
  login(username: string, password: string): boolean {
    // Implement your login logic here (e.g., validate credentials)
    // For demonstration purposes, we'll assume login is always successful
    this.loggedIn.next(true);
    return true;
  }

  // Log out the user
  logout() {
    this.loggedIn.next(false);
  }
}
