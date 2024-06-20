// 6. Usando o contexto do exercício 5, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

export let directors: Director[] = [];

export function addDirector(director: Director): void {
    directors.push(director);
}

export function listDirectors(director: Director[]): void {
    directors.forEach(director => {
        const salary = director.salary !== undefined ? `R$ ${director.salary}` : 'N/A';
        console.log(`${director.name}, ${director.age} anos, comissão nível ${director.commissionLevel}, salário ${salary}`);
    });
}