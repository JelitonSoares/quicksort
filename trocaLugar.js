const { clientes } = require('./clientes.js');

function trocaLugar(array, item1, item2){
    let primeiroItem = array[item1];
    let segundoItem = array[item2];
    array[item1] = segundoItem;
    array[item2]= primeiroItem;

    return array;
}

//console.log(trocaLugar(clientes, 2, 5));

module.exports = { trocaLugar };