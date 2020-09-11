import fs from 'fs';

//Exercício 1
//a) Um constructor serve para inicializar um objeto criado a partir de uma classe.
//b)

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

}

const newAccount: UserAccount = new UserAccount('444-555-666-7', 'Aline', 45)


//c) Com métodos públicos, chamados de getters (para pegar o atributo) e setters (para alterar).

//Exercício 2
class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }
}


//Exercício 3
// class Bank {
//   private accounts: UserAccount[];
//   private fileManager: JSONFileManager;

//   constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
//     this.accounts = accounts;
//     this.fileManager = new JSONFileManager("data.json")
//   }

// }

//Exercício 4

// class JSONFileManager {

//   private fileName: string

//   constructor(fileName: string) {
//       this.fileName = fileName
//   }

//   public readDatabase(): Object {
//       try {
//           const fileData: string = fs.readFileSync(this.fileName).toString()
//           return JSON.parse(fileData)
//       } catch (error) {
//           console.log(`Erro ao ler a base de dados: ${error.message}`)
//           return []
//       }
//   }

//   public writeToDatabase(data: any): void {
//       try {
//           const dataAsString: string = JSON.stringify(data, null, 3)
//           fs.writeFileSync(this.fileName, dataAsString)
//       } catch (error) {
//           console.log(`Erro ao escrever na base de dados: ${error.message}`)
//       }
//   }
// }























// type person = {
//   name: string
// }

// function createPerson(name: string): person {
// 	return {name: name} 
// } 

// const myPerson2 = createPerson("Robson");

// console.log(myPerson2);