import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  // Esta URL coincide con lo que configuramos en json-server (routes.json)
  private apiUrl = 'http://localhost:8080/api/cursos';

  constructor(private http: HttpClient) { }

  // 1. Obtener todos (GET) - Para la tabla
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 2. Crear (POST) - Requisito de rúbrica
  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // 3. Editar (PUT) - Requisito de rúbrica
  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // 4. Eliminar (DELETE) - Requisito de rúbrica
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}