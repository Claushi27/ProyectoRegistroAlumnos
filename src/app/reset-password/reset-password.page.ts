import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetPasswordForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  onResetPassword() {
    if (this.resetPasswordForm.valid) {
      // Aquí puedes agregar lógica para enviar una solicitud de recuperación de contraseña
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
    }
  }
}

