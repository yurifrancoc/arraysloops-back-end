const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];



for (let index = 0; filaDeDentro.length < 5; index++) {
  const primeiroDaFila = filaDeFora.shift();
  {
    filaDeDentro.push(primeiroDaFila)
  }
}
console.log(filaDeDentro)
