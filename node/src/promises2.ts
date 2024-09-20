console.log("Inicio");

let numero1 = 50;
let numerodiv = 2;

ceroDivisor(numero1, numerodiv);

function ceroDivisor(num1: number, numdiv: number) {

    new Promise((resolve, reject) => {

        if (numdiv!==0) {
            let resul = num1/numdiv;
            console.log(resul);
            resolve('promesa cumplida divisor diferente a cero');
        } else {
            reject('promesa no cumplida divisor diferente a cero');
        }

    }).then((mensaje) => console.log(mensaje))
        .catch((mensajeError) => console.error(mensajeError))
        .finally(() => console.log('Fin de la promesa'));

}
console.log("Fin");