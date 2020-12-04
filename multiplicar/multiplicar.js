const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');

let data = '';

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado no es un numero ${base}`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ingresado no es un numero ${base}`);
            return;
        }


        for (let i = 0; i <= limite; i++) {
            data += ` ${base} * ${i}  = ${base * i} \n`;
        }
        resolve(`${data}`);
    });
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado no es un numero ${base}`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ingresado no es un numero ${base}`);
            return;
        }

        console.log('====================================='.green);
        console.log('=========Tabla de Multiplicar=========='.green);
        console.log('====================================='.green);

        for (let i = 0; i <= limite; i++) {
            data += ` ${base} * ${i}  = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Ha sido creada la tabla-${base}`);
            }
        });
    });
}


module.exports = { crearArchivo: crearArchivo, listar: listar }




