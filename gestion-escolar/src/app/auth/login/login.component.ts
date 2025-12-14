import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    console.log('ENVIANDO DATOS:', this.credentials);
    this.authService.login(this.credentials).subscribe({
      next: () => {
        // Si el login es exitoso, Angular te lleva al dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        this.errorMessage = 'Credenciales incorrectas o servidor apagado';
        console.error(err);
      }
    });
  }
}