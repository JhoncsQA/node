export interface Vehiculo {
    marca: string;
    modelo: string;
    año: number;

    encender(): void;
    apagar(): void;
}

const auto: Vehiculo = {
    marca: 'mercedes benz',
    modelo: "Vans",
    año: 2020,

    encender() {
        console.log(`${this.marca} ${this.modelo} del año ${this.año} ha sido encendido.`);
    },

    apagar() {
        console.log(`${this.marca} ${this.modelo} del año ${this.año} ha sido apagado.`);
    }
};



function imprimirVehiculos(): void {
    
}


console.table(auto)

export let v = console.table(auto)

v = auto.encender()





