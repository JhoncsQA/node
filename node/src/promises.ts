console.log("Inicio");

    new Promise((resolve)=>{

        setTimeout(()=>{
            resolve('promesa cumplida');
        },1000);

    }).then((mensaje)=> console.log(mensaje))


console.log("Fin");