exports.run = (client, message, args) => {
  message.channel.send(
    "```[1]Play -> Toca qualquer musica do Youtube [Url] ou [Nome]```" +
      "```[2]Search -> Pesquisa a musica do Youtube [Nome]```" +
      "```[3]Leave -> Tira o bot do canal de voz```" +
      "```[4]Ping -> Verifica o ping entre o bot e o servidor```"
  );
};
