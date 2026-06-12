class mensagem{
    constructor(remetente, conteudo){
        this.remetente = remetente
        this.conteudo = conteudo

    }

    formato(){
        return `From ${this.remetente} : ${this.conteudo}`

    }
}


let input = prompt("")

if (input.includes (":")){
    formato()
} else {
    console.log("Invalid message")
}

