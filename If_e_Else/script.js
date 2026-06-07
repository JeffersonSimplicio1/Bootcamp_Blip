let possuiOvos = false
let itensComprados = ""


let voceComprou = prompt("tinha ovos (S/N)?").toUpperCase()
if (voceComprou === "S"){
    possuiOvos = true
}
if(possuiOvos === true){
    itensComprados = "Leite"
    console.log("Tinha ovos!")
} else {
    console.log("não tinha ovos")
}


