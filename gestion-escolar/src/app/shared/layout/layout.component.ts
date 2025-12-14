import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isAdmin = false;

  constructor(private authService: AuthService) {
    // Verificamos el rol para mostrar/ocultar menú de usuarios
    const role = localStorage.getItem('role');
    this.isAdmin = role === 'admin';
  }

  logout() {
    this.authService.logout();
  }
}