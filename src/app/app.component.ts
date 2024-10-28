import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  navegarDocente() {
    this.router.navigate(['/home']); 
    console.log('Hice clic en navegar a docente');
  }
}


