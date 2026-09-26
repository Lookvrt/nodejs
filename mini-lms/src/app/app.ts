import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
  nombre: string;
  creditos: number;
  edad: number;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Mini-LMS · Lista de estudiantes';
  estudiantes: Estudiante[] = [
    { nombre: 'María Torres', edad: 18, creditos: 10 },
    { nombre: 'Luis Pérez', edad: 20, creditos: 18 },
    { nombre: 'Ana Ruiz', edad: 26, creditos: 14 },
    { nombre: 'Juan Lopez', edad: 16, creditos: 11 }
  ];
// Misma regla de matrícula de la Unidad 1, ahora como método del componente.
  estado(creditos: number): string {
    if (creditos < 1 || creditos > 24) {
      return 'Créditos inválidos';
    } else if (creditos >= 12) {
      return 'Matriculado';
    }
    return 'Pendiente';
  }

  edad(edad: number): string {
    if(edad >= 18){
      return "Mayor de edad";
    } else if(edad >= 0 && edad < 18){
      return "Menor de edad";
    } else {
      return "edad invalida"
    }
  }

  /*
  edad(edad: number): string {
  if (isNaN(edad) || edad < 0) {
    return "edad invalida";
  }
  return edad >= 18 ? "Mayor de edad" : "Menor de edad";
  }
  */
}