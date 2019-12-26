exports.run = async (client, message, args) => {
  let voiceChannel = message.member.voiceChannel;

  if (!voiceChannel) {
    return message.channel.send("Canal não encontrado");
  }

  if (!message.guild.me.voiceChannel) {
    return message.channel.send("Bot não esta no canal");
  }

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) {
    return message.channel.send("Você e o bot não estão no mesmo canal");
  }

  message.guild.me.voiceChannel.leave();
  message.channel.send("Saindo do canal...");
};
