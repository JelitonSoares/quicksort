//        Ordenando com o QuickSort

const { clientes } = require('./clientes.js');

              //Recursão
function quickSort(array, esquerda, direita) {
   if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
   }

   return array;
}
     // Quebrando o array em partes a partir de um pivo
function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let iEsquerda = esquerda;
    let iDireita = direita;
    // console.log(`array`, array);
    // console.log(`pivo`, pivo);
    // console.log(`esquerda`, esquerda, `direita`, direita);
    while(iEsquerda <= iDireita){
        while(array[iEsquerda].idade < pivo.idade){
            iEsquerda++
        }

        while(array[iDireita].idade > pivo.idade) {
            iDireita--
        }

        if (iEsquerda <= iDireita) {
            trocaLugar(array, iEsquerda, iDireita);
            iEsquerda++;
            iDireita--;
        }
    }

    return iEsquerda;
}
//                  Função usada para trocar os elementos de lugar
function trocaLugar(array, item1, item2) {
    let primeiroItem = array[item1];
    let segundoItem = array[item2];
    array[item1] = segundoItem;
    array[item2] = primeiroItem;

    return array
}

//console.log(trocaLugar(clientesHomens, 1, 3));
console.log(quickSort(clientes, 0, clientes.length - 1));