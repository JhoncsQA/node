console.log("Inicio");

new Promise((resolve, reject) => {


    setTimeout(() => {
        resolve('promesa cumplida');
        resolve('promesa cumplida');
        resolve('promesa cumplida');
        resolve('promesa cumplida');
        resolve('promesa cumplida');
    }, 1000);

}).then((mensaje) => console.log(mensaje))
    .catch((mensajeError) => console.error(mensajeError))
    .finally(() => console.log('Fin de la promesa'));


console.log("Fin");

let numero1 = 10;
let numero2 = 8;

numPositivo(numero1, numero2);

function numPositivo(num1: number, num2: number) {

    new Promise((resolve, reject) => {

        if (num1 > 0 && num2 > 0) {
            resolve('promesa cumplida numeros positivos');
        } else {
            reject('promesa no cumplida no son numeros positivos');
        }

    }).then((mensaje) => console.log(mensaje))
        .catch((mensajeError) => console.error(mensajeError))
        .finally(() => console.log('Fin de la promesa'));
}