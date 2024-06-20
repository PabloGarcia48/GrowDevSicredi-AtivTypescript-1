// exercício 1
interface Resultado {
    media: number;
    aprovado: boolean;
  }

// exercício 2
type NotaPeso = {
    nota: number;
    peso: number;
}

// exercício 3
type Transacao = {
    valor: number;
    tipo: 'Saida' | 'Entrada'
}

type Carteira = {
    saldo: number;
    transacoes: Transacao[]
}

// exercício 4
type Product = {
    name: string;
    value: number;
    profit: number
}

// exercício 5
interface User {
    name: String;
    age: number;
    job: String;
    salary?: number | "N/A"
}

// exercício 6
interface Director {
    name: String;
    age: number;
    commissionLevel: number;
    salary?: number | "N/A"
}

// exercicio 7
type Employee = User | Director;