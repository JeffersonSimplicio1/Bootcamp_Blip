function saudacaoBot(canal) {
  let msg = ""
  
  if(canal === "whatsapp"){
    msg = `Ola, este e o WhatsAppBot!`
  } else if (canal === "telegram"){
    msg = `Ola, este e o TelegramBot!`
  } else if (canal === "webchat"){
    msg = `Ola, este e o WebChatBot!`
  } else{
    msg = "Canal nao suporta"
  }
    return msg
}

// Entrada do usuário
const canal = "telegram";

// Chama a função e imprime a resposta
console.log(saudacaoBot(canal));