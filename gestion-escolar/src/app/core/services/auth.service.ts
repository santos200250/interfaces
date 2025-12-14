import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Conectamos al endpoint que definimos en routes.json
  private apiUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient, private router: Router) { }

  // 1. Método Login
  // Aceptamos 'any' para ser flexibles, o la interfaz específica {email, password}
  login(credentials: any): Observable<any> {
    // CAMBIO 2: Creamos el objeto manualmente para asegurar que enviamos "email" y "password"
    // Esto arregla el error 400 si tu HTML o componente envían basura extra
    const payload = {
      email: credentials.email,
      password: credentials.password
    };

    return this.http.post<any>(this.apiUrl, payload).pipe( // Usamos 'payload' aquí
      tap(response => {
        if (response && response.accessToken) {
          localStorage.setItem('token', response.accessToken);
          const userRole = response.user ? response.user.role : 'user';
          localStorage.setItem('role', userRole);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
      })
    );
  }

  // 2. Método Logout
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // 3. Métodos Auxiliares
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}