// EXERCÍCIOS DE INTERPRETAÇÃO
// EXERCÍCIO 1
// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	} 
// 	return array
// }

// const resultado = minhaFuncao()
// console.log(resultado) 

// a) []
//length: 0

// b) (6) [0, 1, 0, 1, 2, 3]
// 0: 0
// 1: 1
// 2: 0
// 3: 1
// 4: 2
// 5: 3
// length: 6

// c) (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
// 0: 0
// 1: 1
// 2: 0
// 3: 1
// 4: 2
// 5: 3
// 6: 0
// 7: 1
// 8: 2
// 9: 3
// 10: 4
// 11: 5
// length: 12



//EXERCÍCIO 2
// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));

// a) 0, 2 e undefined (porque não está como "Paula" e sim "Paulinha", então a função não tem como encontrar um nome que não 
// existe dentro do array)

// b) 

// let arrayDeNumeros = [1, 2, 3, 4, 5];

// const funcao = (lista, numero) => {
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === numero) {
//         return i;
//       }
//     }
//   };
  
//   console.log(funcao(arrayDeNumeros, 1));
//   console.log(funcao(arrayDeNumeros, 3));
//   console.log(funcao(arrayDeNumeros, 7));

// RESPOSTA: sim, funciona da mesma maneira, é só substituir os nomes adequadamente, pois o que a função está fazendo é apenas chamar o número
// do índice de cada item, então no fim o resultado acaba sendo o mesmo.



// EXERCÍCIO 3
// function metodo(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let X of array) {
//       resultadoA += x;
//       resultadoB *= x;
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }

// let array = [3, 4]
// let arrayFinal
// console.log(arrayFinal)

// RESPOSTA:


// EXERCÍCIO 4

let humano = 1;
let cachorro = humano * 7;

function idadeCachorro() {
  humano = 4;
  return cachorro
}

idadeCachorro();









  