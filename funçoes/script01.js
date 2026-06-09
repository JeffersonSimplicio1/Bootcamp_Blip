// funções com retorno

function soma(a,b){
    let somatorio = a+b
    return somatorio
}

let resultado = soma(3,4)
console.log(`O resultado da soma é ${resultado} `)



function primeiroNome(name){
    let nome = name.split(" ")[0]
    return nome
}


let nome = prompt("Digite seu nome completo: ")
let nomeInicial = primeiroNome(nome)
console.log(`Seja bem vindo ${nomeInicial}`)
