console.log("Hola desde Node.js");

// TypeScript: variables con tipo (anotaciones).
let nombre: string = "María Torres";
let creditos: number = 18;
let activo: boolean = true;
console.log(nombre, creditos, activo);

// Función tipada: recibe y devuelve tipos declarados.
function saludar(persona: string): string {
return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));

// Interfaz: describe la forma de un dato.
interface Curso {
nombre: string;
creditos: number;
}
const curso: Curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);