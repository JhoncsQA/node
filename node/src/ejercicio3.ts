export function setupEmpleado(displayElement4: HTMLDivElement) {
interface Empleado {
    id: number;
    nombre: string;
    puesto: string;
    salario: number;
}

interface Persona {
    nombre: string;
    edad: number;
    email: string;
    empleado: Empleado;
}
const persona: Persona = {
    nombre: "Juan Pérez",
    edad: 30,
    email: "juan.perez@example.com",
    empleado: {
        id: 1,
        nombre: "Juan Pérez",
        puesto: "Desarrollador",
        salario: 5000000
    }
};
const { nombre, empleado: { puesto } } = persona;

console.log(`Nombre: ${nombre}`);
console.log(`Puesto: ${puesto}`);

const setEmpleado = (persona : Persona) => {
    displayElement4.innerHTML = `
       <p>Nombre: ${persona.nombre}</p>
        <h3>Empleados:</h3>
        <ul>
           ${`<li>${persona.nombre}</li>`}
           ${`<li>${persona.edad}</li>`}
        </ul>
    `;
}

setEmpleado(persona);
}
