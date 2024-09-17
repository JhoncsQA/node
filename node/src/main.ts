import './style.css'
import { setupSumaBin } from './sumaBinaria.ts'
import { v } from './vehiculo.ts'
import { setupProyect } from './ejercicio2.ts'
import {setupMotor} from './motor.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${v}
    <div class="card">
      <input id="input1" type="number" placeholder="Ingrese número 1" />
      <input id="input2" type="number" placeholder="Ingrese número 2" />
      <button id="counter" type="button">Sumar en Binario</button>
      <div>
        <h3>Suma binaria</h3>
        <p id="resultado" type="number"/>
      </div>
    

     
      </div>
      </div>
    </div>
    <div id="displayCount"></div>
  </div>

  <div>
    <div class="card">
       <h2>Ejercicio 2 proyecto</h2>
     
        <p id="proyecto" type="String"/>
   
        <p id="empleado" type="String"/>
      </div>
      </div>
    </div>
    <div id="displayCount"></div>
  </div>

  <div>
    <div class="card">
       <h2>Ejercicio 3 Carros</h2>
     
        <p id="motor" type="String"/>
      </div>
      </div>
    </div>
    <div id="displayCount"></div>
  </div>
`

const buttonElement = document.querySelector<HTMLButtonElement>('#counter')!
const displayElement = document.querySelector<HTMLDivElement>('#resultado')!
const input1Element = document.querySelector<HTMLInputElement>('#input1')!
const input2Element = document.querySelector<HTMLInputElement>('#input2')!

//Proyecto
const displayElement1 = document.querySelector<HTMLDivElement>('#proyecto')!
const displayElement2 = document.querySelector<HTMLDivElement>('#empleado')!

//Proyecto
const displayElement3 = document.querySelector<HTMLDivElement>('#motor')!

setupSumaBin(buttonElement, displayElement, input1Element, input2Element)
setupProyect(displayElement1, displayElement2)
setupMotor(displayElement3)