const  argv  = require('./config/yargs.js').argv;
const colors = require('colors');
const { crearArchivo, listar } = require('./multiplicar/multiplicar.js');

let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];


switch (comando) {
    case 'listar':
        listar(base, limite).then((tabla => console.log(tabla))).catch((err => console.log(err)));
        break;
    case 'crear':
        crearArchivo(base, limite).then((archivo => console.log(colors.blue('%s'), archivo))).catch((err => console.log(err)));
        break;
    default:
        console.log('comando no reconocido');
}



