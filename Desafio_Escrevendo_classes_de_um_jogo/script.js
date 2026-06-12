class caracteristicaHeroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }

    atacar(){
        let tipoHeroi = this.tipo.toUpperCase()

        if (tipoHeroi === "MAGO"){
            console.log(`o ${this.tipo} atacou usando magia`)
        } else if (tipoHeroi === "GUERREIRO"){
            console.log(`o ${this.tipo} atacou usando espada`)
        } else if (tipoHeroi === "MONGE"){
            console.log(`o ${this.tipo} atacou usando artes marciais`)
        } else if (tipoHeroi === "NINJA"){
            console.log(`o ${this.tipo} atacou usando shuriken`)
        } else{
            console.log("Valor invalido!")
        }

    }

}

let heroi = new caracteristicaHeroi ("Goku", 25, "monge")
heroi.atacar()