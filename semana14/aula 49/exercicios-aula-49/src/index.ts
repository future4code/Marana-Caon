import { User } from "./User"
import { Customer } from "./Customer"
import { Employee } from "./Employee";
import { Seller } from "./Seller";
import moment from "Moment";

// Exercício 1
// a) Não pois a senha é privada e não possui um getter.
// b) Uma, pois o construtor foi chamdo apenas uma vez.

const newUser: User = new User('287345', 'novousuario@gmail.com', 'Novo Usuário', '123456')
console.log("Id do novo consumidor:", newUser.getId());
console.log("Email do novo consumidor:", newUser.getEmail());
console.log("Nome do novo consumidor:", newUser.getName());
    
    
// Exercício 2
// a) Uma
// b) Duas

const newCustomer: Customer = new Customer('647434', "carla@gmail.com", "Carla", "654321", "123456789")

// Exercício 3
// a) Não, pois é um atributo que pertence a classe pai (User), como não possui um getter
// apenas a classe User pode acessá-lo, caso seja criado um getter.

console.log("Id do novo consumidor:", newCustomer.getId());
console.log("Email do novo consumidor:", newCustomer.getEmail());
console.log("Nome do novo consumidor:", newCustomer.getName());
console.log("Compra do novo consumidor:", newCustomer.purchaseTotal);
console.log("Cartão do novo consumidor:", newCustomer.getCreditCard());

// Exercício 4 e 5

newCustomer.introduceYourself();

// Exercício 6
// a) 3 vezes


const newEmployee: Employee = new Employee("72828663", "ludovico@gmail.com", "Ludovico", "432561", moment
('20-08-2018', 'DD/MM/YYYY').format('DD/MM/YYYY'), 3000);

console.log(newEmployee)

// b)
console.log("Id do novo funcionário:", newEmployee.getId());
console.log("Email do novo funcionário:", newEmployee.getEmail());
console.log("Nome do novo funcionário:", newEmployee.getName());
console.log("Data de admissão do novo funcioário:", newEmployee.getAdmissionDate());
console.log("Salário do novo funcionário:", newEmployee.getBaseSalary());

// Exercício 7

console.log('Valor total do salário', newEmployee.calculateTotalSalary())

// Exercício 8
// a) Todos os necessários para a criação da instância da classe employee, sendo a classe Seller
// filha da employee, herdando assim seu contrutor

const newSeller: Seller = new Seller("76347253", "patricia@gmail.com", "Patrícia", "777777", moment
('30/03/2010', 'DD/MM/YYYY').format('DD/MM/YYYY'), 4000)

// b) Todas as informações, menos o password, pelos mesmos motivos respondidos nas anteriores.

console.log("Id do novo vendedor:", newSeller.getId());
console.log("Email do novo vendedor:", newSeller.getEmail());
console.log("Nome do novo vendedor:", newSeller.getName());
console.log("Data de admissão do novo vendedor:", newSeller.getAdmissionDate());
console.log("Salário do novo vendedor:", newSeller.getBaseSalary());


// Exercício 9
// a) Não, pois ele ainda não possui um getter.
console.log('Valor de sales quantity antes de ser atualizado:', newSeller.getSalesQuantity())
newSeller.setSalesQuantity(200);
console.log('Valor de sales quantity depois de ser atualizado:', newSeller.getSalesQuantity())

// Exercício 10
// a) O valor de 4400, pois a classe Seller sobreescreveu a função original, alterando a maneira
// como o salário foi calculado.

const newSeller2: Seller = new Seller("339876", "daniela@gamil.com", "Daniela", "777777", moment
('01/09/2020', 'DD/MM/YYYY').format('DD/MM/YYYY'), 2500);
newSeller2.setSalesQuantity(300);
console.log("Salário total da Daniela", newSeller2.calculateTotalSalary())

// Exercício 11
// Implementação feita no Seller e no Employee.


