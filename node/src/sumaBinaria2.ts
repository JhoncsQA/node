// Declaración de variables con tipos explícitos
let num1: number = 1;
let num2: number = 1;
let sum: number = num1 + num2;

// Variable para almacenar el resultado de la conversión
let resultado: string = '';

// Proceso de conversión de decimal a binario
let temp: number = sum; // Usamos una variable temporal para no modificar 'sum'
while (temp > 0) {
  resultado = (temp % 2) + resultado;
  temp = Math.floor(temp / 2);
}

// Mostrar el resultado en consola
export let p = console.log(resultado);

