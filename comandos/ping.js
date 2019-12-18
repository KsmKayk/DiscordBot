exports.run = async (client, message, args) => {
  const m = await message.channel.send("Calculando...");

  m.edit(
    `Pong! :ping_pong:
    \nLatencia é de **${m.createdTimestamp - message.createdTimestamp}** ms!
    \nLatencia da API é de **${client.ping}** ms!`
  );
};
