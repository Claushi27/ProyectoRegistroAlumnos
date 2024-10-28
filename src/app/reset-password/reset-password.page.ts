import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm: FormGroup;
  storedPassword: string | null = ''; // Variable para mostrar la contraseña recuperada

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetPasswordForm = this.fb.group({
      username: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Lógica para verificar si hay una contraseña almacenada
    const username = this.resetPasswordForm.value.username;
    if (username) {
      this.storedPassword = localStorage.getItem(username);
    }
  }

  onResetPassword() {
    const username = this.resetPasswordForm.value.username;

    if (this.resetPasswordForm.valid) {
      // Recupera la contraseña desde localStorage usando el nombre de usuario
      this.storedPassword = localStorage.getItem(username);

      if (this.storedPassword) {
        alert(`Tu contraseña es: ${this.storedPassword}`); // Mostrar la contraseña en un alert
      } else {
        alert('No se encontró una contraseña para este usuario.');
      }
      this.router.navigate(['/login']);
    }
  }
}
