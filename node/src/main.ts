
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { k} from './persona.ts'
import {setupSuma } from './sumaBinaria.ts'
import {p} from './sumaBinaria2.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div> 
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <label for="numero1">Número 1:</label>
    <input type="text" id="numero1" placeholder = "Ingresa el numero 1">
    <label for="numero1">Número 2:</label>
    <input type="text" id="numero2" placeholder = "Ingresa el numero 2">
    <h1></h1>
    
    
    <div class="card">
      <button id="sumabin" type="button">Sumar Binario</button>
      <h3><p>La suma de los dos numeros ingresados en binario es: <span id="resultado">${setupSuma}</span></p></h3>
      <button id="counter" type="button"></button>
      ${p}
    </div>
    
    <p class="read-the-docs">${k}
    
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
