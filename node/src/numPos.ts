export function numPositivo(num1: number, num2: number) {

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
