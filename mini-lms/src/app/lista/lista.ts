import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { estudiantes, estado } from '../store';
@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista.html'
})
export class Lista {
  estudiantes = estudiantes;
  estado = estado;
}
