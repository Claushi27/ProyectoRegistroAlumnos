import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { LoginPage } from './login/login.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { HomePage } from './home/home.page';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { QrScannerService } from './qr-scanner.service'; // Importar el servicio QR

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ResetPasswordPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    HttpClientModule // Agregar HttpClientModule aquí
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QrScannerService // Registrar el servicio QR
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permitir el uso de elementos personalizados
})
export class AppModule {}
