const numeros = [3, 24, 1, 8, 11, 7, 15, 9, 200];

let maiorNumero = 0;

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    if (numero > maiorNumero) {
        maiorNumero = numero
    }

}



console.log(maiorNumero)





























// let maiorNumAtualmente = 0;
// for (let numeroAtualDoArray of numeros) {
//     if (numeroAtualDoArray >= maiorNumAtualmente) {
//         maiorNumAtualmente = numeroAtualDoArray
//     }
// }
// console.log(maiorNumAtualmente)