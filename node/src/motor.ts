export function setupMotor(displayElement3: HTMLDivElement) {
interface Motor {
    tipo: string; // Ejemplo: "Gasolina", "Eléctrico", "Híbrido"
    potencia: number; // Ejemplo: 150
  }
  
 interface Carro {
    marca: string; // Ejemplo: "Toyota"
    modelo: string; // Ejemplo: "Corolla"
    motor: Motor;
  }
  
 interface Empleado {
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

const setProyect = () => {
  displayElement3.innerHTML = `
      <h3>Carros vendidos:</h3>
      <ul>
          ${carrosVendidos.map(e => `<li>${e.marca} - ${e.modelo} - ${e.motor.tipo} - ${e.motor.potencia}  </li>`).join('')}
      </ul>
  `;
}

setProyect()


}
