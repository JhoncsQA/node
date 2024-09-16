// interfaces.ts
export interface Habilidad {
    nombre: string;
    nivel: string; // Ejemplo: "Básico", "Intermedio", "Avanzado"
}

export interface Empleado {
    id: number;
    nombre: string;
    habilidades: Habilidad[];
}

export interface Proyecto {
    id: number;
    nombre: string;
    empleados: Empleado[];
}
// data.ts

const habilidadesEmpleado1: Habilidad[] = [
    { nombre: 'TypeScript', nivel: 'Avanzado' },
    { nombre: 'React', nivel: 'Intermedio' }
];

const habilidadesEmpleado2: Habilidad[] = [
    { nombre: 'JavaScript', nivel: 'Avanzado' },
    { nombre: 'Node.js', nivel: 'Intermedio' }
];

export const empleados: Empleado[] = [
    { id: 1, nombre: 'Juan Pérez', habilidades: habilidadesEmpleado1 },
    { id: 2, nombre: 'Ana Gómez', habilidades: habilidadesEmpleado2 }
];

export const proyectos: Proyecto[] = [
    {
        id: 1,
        nombre: 'Desarrollo Web',
        empleados: empleados
    }
];
