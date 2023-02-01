const original = [5, 7, 13, 17, 26, 34, 1, 245, 20, 200, 202, 100];
const novoArray = []

for (let index = 0; index < original.length; index++) {
    const numeroNesseIndex = original[index];
    if (numeroNesseIndex > 10 && numeroNesseIndex < 20 || numeroNesseIndex > 100) {
        novoArray.push(numeroNesseIndex)
    }
}

console.log(novoArray)

























// for (let i of original) {
//     if (i >= 10 && i <= 20 || i > 100) {
//         console.log(i)
//     }
// }