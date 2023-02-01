const nomes = ["Ana", "Joana", "Corlos", "amanda", "alvaro"];
const nomesComANoInicio = []

for (let index = 0; index < nomes.length; index++) {
    const nome = nomes[index];
    if (nome[0] === "A" || nome[0] === "a") {
        nomesComANoInicio.push(nome)
    }

}
console.log(nomesComANoInicio)

































// let nomesIniciadosComA = []

// for (let nome of nomes) {
//     if (nome[0] === "A" || nome[0] === "a") {
//         nomesIniciadosComA.push(nome)

//     }
// } console.log(nomesIniciadosComA)