import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-cursos',
  standalone: false, // <--- ¡Vital para que no te dé error con los Módulos!
  templateUrl: './cursos.component.html',
  //styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: any[] = []; // Aquí guardaremos los datos de la "base de datos"

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursoService.getAll().subscribe({
      next: (data: any) => {
        this.cursos = data;
        console.log('Cursos cargados:', data);
      },
      error: (err: any) => alert('Error al cargar cursos: ' + err.message)
    });
  }

  eliminarCurso(id: number) {
    if (confirm('¿Estás seguro de eliminar este curso?')) {
      this.cursoService.delete(id).subscribe(() => {
        this.cargarCursos(); // Recargamos la tabla automáticamente
      });
    }
  }
}
