export function setupProyect(displayElement1: HTMLDivElement, displayElement2: HTMLDivElement) {
    interface Habilidad {
        nombre: string;
        nivel: string; // Ejemplo: "Básico", "Intermedio", "Avanzado"
    }

    interface Empleado {
        id: number;
        nombreEmp: string;
        habilidades: Habilidad[];
    }

    interface Proyecto {
        id: number;
        nombrePro: string;
        empleados: Empleado[];
    }

    // data.ts

    const habilidadesEmpleado1: Habilidad[] = [
        { nombre: 'Comunicación', nivel: 'Avanzado' },
        { nombre: 'Redacción', nivel: 'Intermedio' }
    ];

    const habilidadesEmpleado2: Habilidad[] = [
        { nombre: 'Escritura', nivel: 'Avanzado' },
        { nombre: 'Venta', nivel: 'Intermedio' }
    ];

    const empleados: Empleado[] = [
        { id: 1, nombreEmp: 'Juan Pérez', habilidades: habilidadesEmpleado1 },
        { id: 2, nombreEmp: 'Ana Gómez', habilidades: habilidadesEmpleado2 }
    ];

    const proyectos: Proyecto[] = [
        {
            id: 1,
            nombrePro: 'Desarrollo Web',
            empleados: empleados
        }
    ];

    // Obtener los empleados y proyecto
    const [empleado1, empleado2] = empleados;
    const proyecto = proyectos[0];


    // Funciones para actualizar el DOM
    

    const setProyect = (proyect : Proyecto) => {
        displayElement1.innerHTML = `
           <p>Nombre: ${proyect.nombrePro}</p>
            <h3>Empleados:</h3>
            <ul>
                ${empleados.map(e => `<li>${e.nombreEmp}</li>`).join('')}
                ${habilidadesEmpleado1.map(e => `<li>${e.nombre}</li>`).join('')}
            </ul>
        `;
    }
    setProyect(proyecto)
}
