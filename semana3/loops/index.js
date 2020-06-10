// EXERCÍCIO 1
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)

// RESPOSTA: O código está gerando números de 0 à 15 e somando-os, no final o resultado é 105. 0 + 0 = 0 + 1 = 1 + 2 =
// 3 + 3 = 6 + 4 = 10 + 5 = 15 + 6 = 21 e assim consecutivamente...

//EXERCÍCIO 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

// RESPOSTA: a) o comando .push adiciona novos itens à uma lista.
// b) [ 10, 15, 25, 30 ]
// c) [ 12, 15, 18, 21, 27, 30 ] e [ 12 ]