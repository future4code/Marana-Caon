/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const naipes = ["♦️", "♥️", "♣️", "♠️"]
const usuario = 0
const computador = 0
 // Sorteia uma carta
 const numero = cartas[Math.floor(Math.random() * 13)]

 // Sorteia um naipe
 const naipe = naipes[Math.floor(Math.random() * 4)]


console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   const carta = comprarCarta(); 
   console.log(carta.texto) 
   console.log(carta.valor) 
	console.log("Usuário - cartas: " , numero + naipe, "- pontuação")
   console.log("Computador - cartas:" ,numero + naipe,"- pontuação")
} else {
	console.log("O jogo acabou!")
}



