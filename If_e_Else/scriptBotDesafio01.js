let comando = prompt("")
let acao = ""

if(comando === "start"){
    acao = "Bot started"
} else if (comando === "stop"){
    acao = "Bot stopped"
} else if (comando === "pause"){
    acao = "Bot paused"
} else {
    acao = "unknown command"
}

console.log(acao)