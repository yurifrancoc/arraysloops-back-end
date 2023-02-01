const original = [1, 4, 12, 21, 53, 88, 112, 2, 50, 3];
const pares = []

for (let index = 0; index < original.length; index++) {
    const numero = original[index];
    if (numero % 2 === 0) {
        pares.push(numero)
    }
}
console.log(pares)





































// for (let numPar of original) {
//     if (numPar % 2 === 0) {
//         console.log(numPar)
//     }
// }