import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string = '';
  subjects: { title: string, registered: Date | null }[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const storedUserName = localStorage.getItem('userName');
    this.userName = storedUserName ? storedUserName : 'Usuario';
    this.subjects = [
      { title: 'Clase de Matemáticas', registered: null },
      { title: 'Clase de Lenguaje', registered: null },
      { title: 'Clase de Historia', registered: null }
    ];
  }

  async registerAttendance(selectedSubject: { title: string, registered: Date | null }) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    // Simular registro de asistencia usando la imagen
    selectedSubject.registered = new Date(); // Hora actual como hora ficticia de registro
    alert(`Asistencia para ${selectedSubject.title} registrada a las ${selectedSubject.registered.toLocaleTimeString()} con foto`);
  }

  handleLogout() {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}



