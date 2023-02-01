const original = [1, 2, 3, 4, 5, 6, 7, 23];
const pares = [];
const impares = [];

for (let item of original) {
    if (item % 2 === 0) {
        pares.push(item)
    } if (item % 2 !== 0) {
        impares.push(item)
    }
}
console.log(impares)
























// for (let numPar of original) {
//     if (numPar % 2 === 0) {
//         pares.push(numPar)
//     }

// }
// for (let numImpar of original) {
//     if (numImpar % 2 !== 0) {
//         impares.push(numImpar)
//     }
// }
// console.log(pares)
// console.log(impares)
