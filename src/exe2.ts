// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado


export function media(notas: NotaPeso[]):number {
    let prod  = 0;
    let pesos = 0;

    for (let i:number =0; i<notas.length; i++){
        prod += notas[i].nota * notas[i].peso;
        pesos += notas[i].peso;
    }

    return prod / pesos;
}



