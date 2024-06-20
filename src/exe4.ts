// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.


export let products: Product[] = [];


export function addProduct(product: Product): void {
    products.push(product);
}

export function listProduct(): void {
    console.log(products);
}

export function deleteProduct(name: string): void {
    const index = products.findIndex(product => product.name === name);
    if (index !== -1) {
        products.splice(index, 1);
    }
    console.log("Produto não encontrado");    
}