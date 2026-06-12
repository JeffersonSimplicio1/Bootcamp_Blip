// JSON - JavaScripot Object Notation
// chave valor com o objetivo de transferir dados

let pedido = {
    nome: "felipe",
    idade: 28,
    produtos: {
        0: ["mouse", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99]
    }
}

//chamada
console.log(pedido)
console.log(pedido.nome)
console.log(pedido.produtos[2])