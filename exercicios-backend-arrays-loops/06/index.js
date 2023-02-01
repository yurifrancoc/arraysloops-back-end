const numeros = [2, 3, 2, 5, 8];

let somaDosPares = 0;

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    if (numero % 2 === 0) {
        somaDosPares = somaDosPares + numero
    }

}

console.log(somaDosPares)





























// let soma = 0;

// for (let numPares of numeros) {
//     if (numPares % 2 === 0) {
//         soma = soma + numPares
//     }
// }
// console.log(soma)