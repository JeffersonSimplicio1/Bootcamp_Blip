function calculoRaqueada(quantVitoria, quantiDerrota){
    total = quantVitoria - quantiDerrota
    nivel = ""

    if (total <= 10){
        nivel = "Ferro"
    } else if (total >=11 && total <= 20){
        nivel = "Bronze"
    } else if (total >=21 && total <= 50){
        nivel = "Prata"
    } else if (total >=51 && total <= 80){
        nivel = "Ouro"
    } else if (total >=81 && total <= 90){
        nivel = "Diamante"
    } else if (total >=91 && total <= 100){
        nivel = "Lendário"
    } else{
        nivel = "Imortal"
    }

    return nivel

}

let vitorias = prompt('Vitorias: ')
let derrotas = prompt("Derrotas: ")

let nivelHeroi = calculoRaqueada(vitorias, derrotas)

console.log(`O Herói tem de saldo de **${vitorias}** está no nível de **${nivelHeroi}**`)
