const {argv} = require('./config/yargs');
//const Colors = require('colors');
const colors = require('colors/safe');
const {crear, actualizar, getlistado, borrar } = require('./porhacer/por-hacer');



const comando = argv._[0];

switch(comando)
{
case 'crear' :
crear(argv.descripcion);
break;
case 'listar':
let listado = getlistado();
//console.log(listado);

for( let tarea of listado){
    console.log(colors.green('======Por hacer======'));
    console.log(tarea.descripcion);
    console.log('Estado: ',colors.blue(tarea.completado));
    console.log(colors.green('====================='));
}
break;
case 'actualizar':
console.log(actualizar(argv.descripcion, argv.completado));
break;
case 'borrar':
let borrado = borrar(argv.descripcion);
console.log(borrado);
break;
default:
console.log('El comando es incorrecto');
break;
}

