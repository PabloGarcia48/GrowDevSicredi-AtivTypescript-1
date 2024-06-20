// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.


export let employees: Employee[] = [];

export function addEmployee(employee:Employee): void {
    employees.push(employee);
}

export function listEmployees(employees: Employee[]): void {
    employees.forEach(employee => {
        const hasSalary = employee.salary !== undefined ? `R$ ${employee.salary}` : 'N/A';
        if ('commissionLevel' in employee) {
            console.log(`Diretor - ${employee.name}, ${employee.age} anos, comissão nível: ${employee.commissionLevel}, salário ${hasSalary}`);
        } else {
            console.log(`Empregado - ${employee.name}, ${employee.age} anos, ${employee.job}, salário ${hasSalary}`);
        }
    });
}
