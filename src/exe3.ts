// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

export let carteira1: Carteira = {
    saldo: 50,
    transacoes: []
}

export function adicionar(c:Carteira, valor: number): void {
    c.saldo += valor;
    c.transacoes.push({
        valor: valor,
        tipo: 'Entrada'
    })
    console.log(c);    
}

export function retirar(c:Carteira, valor: number): void {
    c.saldo -= valor;
    c.transacoes.push({
        valor: valor,
        tipo: 'Saida'
    })
    console.log(c);
    
}
export function saldo(c: Carteira): void {
    console.log(c.saldo);
}



