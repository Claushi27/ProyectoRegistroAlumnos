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
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar lógica para autenticar al usuario
      this.router.navigate(['/home']); // Redirige a la página de inicio
    }
  }

  navigateToResetPassword() {
    this.router.navigate(['/reset-password']); // Redirige a la página de restablecimiento de contraseña
  }
}

