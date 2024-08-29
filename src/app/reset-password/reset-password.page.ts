import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';

  constructor(private router: Router) {}

  onReset() {
    // Aquí iría la lógica para recuperar la contraseña
    console.log('Nombre de Usuario:', this.username);
    // Redirigir a la página de ingreso
    this.router.navigate(['/login']);
  }
}
