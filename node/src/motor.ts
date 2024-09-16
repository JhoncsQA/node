// interfaces.ts
export interface Motor {
    tipo: string; // Ejemplo: "Gasolina", "Eléctrico", "Híbrido"
    potencia: number; // Ejemplo: 150
  }
  
  export interface Carro {
    marca: string; // Ejemplo: "Toyota"
    modelo: string; // Ejemplo: "Corolla"
    motor: Motor;
  }
  
  export interface Empleado {
    nombre: string; // Ejemplo: "Juan Pérez"
    carrosVendidos: Carro[];
  }

  // datos.ts

const carrosVendidos: Carro[] = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    motor: {
      tipo: "Gasolina",
      potencia: 150,
    },
  },
  {
    marca: "Tesla",
    modelo: "Model 3",
    motor: {
      tipo: "Eléctrico",
      potencia: 300,
    },
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    motor: {
      tipo: "Gasolina",
      potencia: 450,
    },
  },
];

const empleado: Empleado = {
  nombre: "Juan Pérez",
  carrosVendidos: carrosVendidos,
};
