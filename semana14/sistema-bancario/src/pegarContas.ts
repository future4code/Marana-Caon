import { readDatabase } from "./index";

readDatabase().map((contas: any) => {
   console.log(`
    Nome: ${contas.nome}
    idade: ${contas.idade}
    Nascimento: ${contas.dataNascimento}
    Cpf: ${contas.cpf}
    Saldo: ${contas.saldo}
   `)
})