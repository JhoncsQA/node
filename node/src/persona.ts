export interface Persona{
    nombre: String,
    pais: String,
    nacimiento: Date,
    documento: Documento,
    imprimir():void,

}
interface Documento{
    tipo: String,
    numero: String,

}
interface Trabajo{}
const Person: Persona={
    nombre: 'Andrea',
    pais: "Colombia",
    nacimiento: new Date('2010-02-20'),
    documento:{
        tipo: "CC",
        numero: "210121",
    },

    imprimir():void{
        console.log(Person);

    }
}


console.table(Person)

const marcaCarros: String[]=['ford', 'Chevrolet', 'mazda'];

export let k =console.log(marcaCarros[2]);
//export  {Person};