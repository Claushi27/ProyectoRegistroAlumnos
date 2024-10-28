import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { BarcodeScanner, Permissions } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string = '';
  subjects: { title: string, registered: Date | null }[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUserName = localStorage.getItem('userName');
    this.userName = storedUserName ? storedUserName : 'Usuario';
    this.subjects = [
      { title: 'Clase de Matemática', registered: null },
      { title: 'Clase de Lenguaje', registered: null },
      { title: 'Clase de Historia', registered: null }
    ];
  }

  async checkPermissions() {
    const status = await Permissions.query({ name: 'camera' });
    if (status.state !== 'granted') {
      await Permissions.request({ name: 'camera' });
    }
  }

  async registerAttendance(selectedSubject: { title: string, registered: Date | null }) {
    try {
      await this.checkPermissions(); // Aquí llamas a la función para verificar permisos
      const isAvailable = await BarcodeScanner.checkAvailability();
      if (!isAvailable) {
        alert('El escáner de códigos de barras no está disponible.');
        return;
      }
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        const decodedText = result.content;
        selectedSubject.registered = new Date();
        alert(`Asistencia para ${selectedSubject.title} registrada a las ${selectedSubject.registered.toLocaleTimeString()} con el código QR: ${decodedText}`);
      } else {
        alert('No se pudo decodificar el código QR.');
      }
    } catch (error) {
      console.error('Error al leer el código QR:', error);
      alert('No se pudo escanear el código QR. Intenta nuevamente.');
    }
  }

  handleLogout() {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}



