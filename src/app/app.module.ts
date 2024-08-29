import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';
import { HomePage } from './home/home.page';
import { RouteReuseStrategy } from '@angular/router'; // Importa RouteReuseStrategy aquí

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
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Usa IonicRouteStrategy aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
