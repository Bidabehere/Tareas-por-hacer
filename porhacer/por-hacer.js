const fs = require('fs');


let listadoporhacer = [];

const cargarDB = () => {
try {
    listadoporhacer = require('../db/data.json');
} catch (error){
    listadoporhacer = [];
}

}

const crear = (descripcion) => {
            cargarDB();

         let porHacer= {
         descripcion,
         completado: false,
            };
        listadoporhacer.push(porHacer);
        guardarDB();
        
        return porHacer;
        }


const guardarDB = () => {

    let data  = JSON.stringify(listadoporhacer)
    
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new err('No se pudo guardar', err)  ;
        console.log('fue guardado');
      });
    
    }

const getlistado = () => {
    cargarDB();
   return listadoporhacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoporhacer.findIndex( tarea => tarea.descripcion === descripcion);
    
    if (index >= 0){
        listadoporhacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}



const borrar = (descripcion) => {
    cargarDB();

let nuevoListado = listadoporhacer.filter(tarea => descripcion !== tarea.descripcion);

if (listadoporhacer.length === nuevoListado.length)
{
    return false;
}else{

    listadoporhacer = nuevoListado;
    guardarDB();
    return true;
}}



module.exports = {

    crear,
    guardarDB,
    getlistado,
    actualizar,
    borrar
}