export function setupSumaBin(buttonElement: HTMLButtonElement, displayElement: HTMLDivElement, input1Element: HTMLInputElement, input2Element: HTMLInputElement) {
    
    const setCounter = (resultado: number) => {
         displayElement.innerHTML =    `${resultado}`
       }
 
   const calcularSumaBin = () => {
       
       let num1: number = parseFloat(input1Element.value);
       let num2: number = parseFloat(input2Element.value);
       let sum: number = num1 + num2;
       let resultado: string = '';
       let temp: number = sum; 
       while (temp > 0) {
           resultado = (temp % 2) + resultado;
           temp = Math.floor(temp / 2);
       }
       setCounter(parseInt(resultado));
   }
   buttonElement.addEventListener('click', calcularSumaBin);
 }