import { readDatabase } from "./index";
import fs from 'fs';
import moment from 'moment';

moment.locale("pt-br")

type Usuario = {
    idade: number,
    nome: string,
    cpf: number,
    dataNascimento: string,
    saldo: number,
    extrato: any
}

type Extrato = {
    valor: number,
    data: moment.Moment,
    descrição: string
}


function criarConta(usuario: Usuario): void {
    const hoje = moment("10/11/2018","DD/MM/YYYY")
    const dataNascimento = moment(usuario.dataNascimento,"DD/MM/YYYY")
    const diffAnos = hoje.diff(dataNascimento, "years")
    if(diffAnos > 18) {
        const fileData: string = fs.readFileSync('./data.json').toString()
        const allClients = JSON.parse(fileData)
        allClients.push(usuario)
        fs.writeFileSync('./data.json', JSON.stringify(allClients, null, 2))
        console.log("Conta cadastrada com sucesso!")
        console.log(readDatabase())
    } 
    else{
        console.log("Não é possível criar conta, usuário menor de 18 anos!")
    }
}

criarConta(
    {
    nome: "Carla", 
    cpf: 1112423334, 
    dataNascimento: "12/03/99", 
    idade: 21,
    saldo: 400,
    extrato: []
    })

