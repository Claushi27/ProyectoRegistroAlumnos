import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string = '';  // Define userName
  upcomingEvents: { title: string, date: Date }[] = [];  // Define upcomingEvents

  constructor(private router: Router) { }

  ngOnInit() {
    // Initialize userName and upcomingEvents here or fetch from a service
    this.userName = 'Juan Pérez';  // Example static value
    this.upcomingEvents = [
      { title: 'Evento 1', date: new Date('2024-09-01') },
      { title: 'Evento 2', date: new Date('2024-09-10') }
    ];
  }

  handleLogout() {
    // Implement logout logic
    console.log('User logged out');
    this.router.navigate(['/login']);  // Redirect to login page
  }
}
