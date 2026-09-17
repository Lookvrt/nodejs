"use strict";
console.log("Hola desde Node.js");
// TypeScript: variables con tipo (anotaciones).
let nombre = "María Torres";
let creditos = 18;
let activo = true;
console.log(nombre, creditos, activo);
// Función tipada: recibe y devuelve tipos declarados.
function saludar(persona) {
    return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
const curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
