const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 0
    }
}

const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', opts).
command('crear', 'Crear una tabla de multiplicar', opts).help().argv;

module.exports = {
    argv : argv
}