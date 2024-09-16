import './style.css'
import { setupSumaBin } from './sumaBinaria.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <input id="input1" type="number" placeholder="Ingrese número 1" />
      <input id="input2" type="number" placeholder="Ingrese número 2" />
      <button id="counter" type="button">Increase Count</button>
      <div>
        <h3>Suma binaria</h3>
        <p id="resultado" type="number"/>
      </div>
     
    </div>
    <div id="displayCount"></div>
  </div>
`

const buttonElement = document.querySelector<HTMLButtonElement>('#counter')!
const displayElement = document.querySelector<HTMLDivElement>('#resultado')!
const input1Element = document.querySelector<HTMLInputElement>('#input1')!
const input2Element = document.querySelector<HTMLInputElement>('#input2')!

setupSumaBin(buttonElement, displayElement, input1Element, input2Element)