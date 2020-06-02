
//1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //false

console.log("e. ", typeof resultado) //boolean

//2

let array
console.log('I. ', array) // undefined

array = null
console.log('II. ', array) // null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) // 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) // 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) // 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) // 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) //1

/* 2) a- Array é uma variável que pode armazenar várioss valores, como se fosse uma
lista. é declarado com []. Ex do exercício: array =[3, 4, 5, 6, 7, 8, 9, 10, 11, 
12, 13]. A palavra "array" pode ser subtituída por outra, pois possuind [] já é
identificado como array.

      b- Começa por 0, 1, 2, 3, ...
      
      c- array.lenght */
