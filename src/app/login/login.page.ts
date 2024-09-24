import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '', 
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/) // Letras y números
        ]
      ]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      localStorage.setItem('userName', this.loginForm.value.username);
      this.router.navigate(['/home']);
    }
  }

  navigateToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}
