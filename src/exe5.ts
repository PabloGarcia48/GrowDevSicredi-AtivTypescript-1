// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

export let users: User[] = [];

export function addUser(user:User): void {
    users.push(user);
}

export function listUsers(user: User[]): void {
    users.forEach(user => {
        const salary = user.salary !== undefined ? `R$ ${user.salary}` : 'N/A';
        console.log(`${user.name}, ${user.age} anos, ${user.job}, salário ${salary}`);
    });
}
