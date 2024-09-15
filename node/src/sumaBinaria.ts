export function setupSuma(element: HTMLButtonElement) {
    // Obtener los elementos del DOM y asegurarse de que sean del tipo HTMLInputElement o null
    const sumabina = document.getElementById("sumabin") as HTMLButtonElement;
    const numer1 = document.getElementById("numero1") as HTMLInputElement;
    const numer2 = document.getElementById("numero2") as HTMLInputElement;
    const resultadoBin = document.getElementById("resultado") as HTMLElement;
  
    // Variable para almacenar el resultado binario
    let result: string = '';
  
    sumabina.addEventListener('click', () => {
  
        // Obtener los valores de los campos de entrada y convertirlos a números
        const num1: number = parseFloat(numer1.value);
        const num2: number = parseFloat(numer2.value);
  
        // Calcular la suma
        let sum: number = num1 + num2;
        result = ''; // Reiniciar resultado
  
        // Convertir la suma a binario
        let i: number = sum;
        if (i === 0) {
            result = '0'; // Manejar el caso especial cuando la suma es 0
        } else {
            while (i > 0) {
                result = (i % 2) + result;
                i = Math.floor(i / 2);
            }
        }
  
        // Actualizar el contenido del elemento con el resultado binario
        if (resultadoBin) {
            resultadoBin.textContent = result;
        }
  
        // Mostrar el resultado en la consola
        console.log(result);
  
        // Actualizar el contenido del elemento pasado como argumento
        setSuma(element, result);
    });
  
    // Función para actualizar el contenido del elemento con el resultado de la suma
    const setSuma = (element: HTMLButtonElement, result: string) => {
        element.innerHTML = `La suma en binario es ${result}`;
    }
  }
  