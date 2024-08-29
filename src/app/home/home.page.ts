import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  registerAttendance(selectedSubject: { title: string, registered: Date | null }) {
    // Simular acceso a la cámara y registro de asistencia
    selectedSubject.registered = new Date(); // Hora actual como hora ficticia de registro
    alert(`Asistencia para ${selectedSubject.title} registrada a las ${selectedSubject.registered.toLocaleTimeString()}`);
  }

  handleLogout() {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}


