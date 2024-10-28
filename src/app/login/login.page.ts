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
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Guarda el nombre de usuario y la contraseña en localStorage
      localStorage.setItem(username, password);

      // Navega al home después de iniciar sesión
      this.router.navigate(['/home']);
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  navigateToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}


