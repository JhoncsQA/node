export function ceroDivisor(num1: number, numdiv: number) {

    new Promise((resolve, reject) => {

        numdiv!==0 ? resolve('promesa cumplida divisor diferente a cero') :
        numdiv ===0 ? reject('promesa no cumplida divisor diferente a cero'):
         '';
        
    }).then((mensaje) => console.log(mensaje))
        .catch((mensajeError) => console.error(mensajeError))
        .finally(() => console.log('Fin de la promesa'));

}