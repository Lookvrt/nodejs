import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { estudiantes } from '../store';
@Component({
  selector: 'app-agregar',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './agregar.html'
})
export class Agregar {
  nombre = '';
  creditos: number | null = null;
  mensaje = '';
  constructor(private router: Router) { }
  // Procesa el formulario: valida y agrega el estudiante.
  guardar(): void {
    const nombre = this.nombre.trim();
    if (nombre.length === 0) {
      this.mensaje = 'El nombre no puede estar vacío';
      return;
    }
    if (this.creditos === null || this.creditos < 1 || this.creditos > 24) {
      this.mensaje = 'Los créditos deben estar entre 1 y 24';
      return;
    }
    estudiantes.push({ nombre: nombre, creditos: this.creditos });
    this.router.navigate(['/']); // navega de vuelta a la lista
  }
}