import { readDatabase } from "./index";
import fs from 'fs';
import moment from 'moment';

moment.locale("pt-br")

type Usuario = {
    idade: number,
    nome: string,
    cpf: number,
    dataNascimento: string
  }

type Saldo = {
    valor: number,
    date: moment.Moment,
    descricao: string
}

function criarConta(usuario: Usuario, saldo: Saldo): void {
    const hoje = moment()
    const dataNascimento = usuario.dataNascimento
    const diffAnos = hoje.diff(dataNascimento, "years")
    if(diffAnos > 18) {
        const fileData: string = fs.readFileSync('./data.json').toString()
        const allClients = JSON.parse(fileData)
        allClients.push(usuario)
        fs.writeFileSync('./data.json', JSON.stringify(allClients, null, 2))
        console.log("Conta cadastrada!")
        console.log(readDatabase())
    } 
    else{
        console.log("Menor que 18 anos. Não é possível criar conta")
    }
}

// criarConta({
//     nome: "Ana",
//     cpf: 4676893450,
//     idade: 23,
//     dataNascimento: "05/04/1993",
//     {valor: 100, 
//      data: moment(),  
//      descricao: "Saldo Atual"}
//     })


    

  readDatabase().map()