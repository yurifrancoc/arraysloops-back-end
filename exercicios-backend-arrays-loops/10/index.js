const numeros = [10, 3, 5, 43, 56, 7, 2, 11, 1000]

let maiorNumero = 0;
let menorNumero = 10000;

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    if (numero > maiorNumero) {
        maiorNumero = numero
    } else if (numero < menorNumero) {
        menorNumero = numero
    }
}
console.log(maiorNumero - menorNumero)




































// let menorNumAtualmente = 0;
// let maiorNumAtualmente = 0;

// // for (let numeroAtualDoArray of numeros) {
// //     if (numeroAtualDoArray >= menorNumAtualmente) {
// //         menorNumAtualmente = numeroAtualDoArray
// //     }
// // }
// for (let numeroAtualDoArray of numeros) {
//     if (numeroAtualDoArray <= menorNumAtualmente) {
//         maiorNumAtualmente = numeroAtualDoArray
//     }
// }

// console.log(maiorNumAtualmente)