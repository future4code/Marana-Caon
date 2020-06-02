// 3
// a)
let quilowattHora = 0.05
let consumoResidencia = 280
let valorContaDeEnergia = consumoResidencia * quilowattHora
console.log(valorContaDeEnergia) // 14 reais

// b)

let descontoDaContaDeEnergia = valorContaDeEnergia * (15/100)
console.log(descontoDaContaDeEnergia) //2.1

let valorContaDeEnergiaComDesconto = valorContaDeEnergia - descontoDaContaDeEnergia
console.log(valorContaDeEnergiaComDesconto)

