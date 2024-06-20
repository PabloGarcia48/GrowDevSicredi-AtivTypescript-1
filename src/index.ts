import { log } from "console";
import { calcularMedia } from "./exe1";
import { media } from "./exe2";
import { carteira1, adicionar, retirar, saldo } from "./exe3";
import { addProduct, products, deleteProduct } from "./exe4";
import { addUser, listUsers, users } from "./exe5";
import { addDirector, directors, listDirectors } from "./exe6";
import { addEmployee, employees, listEmployees } from "./exe7";

// https://nice-neighbor-495.notion.site/Typescript-cf762931687d47cc9462a0852d1c2963

/*
console.log('Olá TS!');

const resultado = calcularMedia(5, 4);
console.log(resultado);

const notas = [
    {nota: 6, peso: 2},
    {nota: 9, peso: 3},
    {nota: 5, peso: 1}
];

console.log("Exercício 2");
console.log(media(notas).toFixed(2));

adicionar(carteira1, 50)
saldo(carteira1)
retirar(carteira1, 10)
retirar(carteira1, 30)
saldo(carteira1)
*/

/*
//Exercício 4
const product1: Product = {
    name: "Balão",
    value: 30,
    profit: 15
}

const product2: Product = {
    name: "Balde",
    value: 10,
    profit: 3
}

const product3: Product = {
    name: "Bacia",
    value: 20,
    profit: 9
}

console.log("Exercício 4");
const balao = addProduct(product1);
const balde = addProduct(product2);
const bacia = addProduct(product3);
console.log(products);

const delBalde = deleteProduct("Balde");
console.log("Produto Deletado");
console.log(products);
*/

/*
//Exercício 5
const user1: User = {
    name: "Pablo",
    age: 41,
    job: "Analista",
    salary: 1000
}

const user2: User = {
    name: "Daphne",
    age: 23,
    job: "Analista de TI"
}

const pablo = addUser(user1);
const Daphne = addUser(user2);
listUsers(users);
*/

/*
//Exercício 6
const director1: Director = {
    name: "Pablo",
    age: 41,
    commissionLevel: 2,
    salary: 12000
}

const director2: Director = {
    name: "Daphne",
    age: 23,
    commissionLevel: 5
}

const pablo = addDirector(director1);
const Daphne = addDirector(director2);
listDirectors(directors);
*/

//Exercício 7
const employee1: Director = {
    name: "Pablo",
    age: 41,
    commissionLevel: 2,
    salary: 12000
}

const employee2: Director = {
    name: "Daphne",
    age: 23,
    commissionLevel: 5
}

const employee3: User = {
    name: "Sheila",
    age: 41,
    job: "Analista",
    salary: 1000
}

const employee4: User = {
    name: "Mariana",
    age: 23,
    job: "Analista de TI"
}

const pablo = addEmployee(employee1);
const daphne = addEmployee(employee2);
const sheila = addEmployee(employee3);
const mariana = addEmployee(employee4);
listEmployees(employees);