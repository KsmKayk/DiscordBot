exports.run = async (client, message, args, ytdl, search) => {
  let voiceChannel = message.member.voiceChannel;

  if (voiceChannel == null) {
    return message.channel.send("Canal não encontrado");
  }

  if (!args[0]) return message.channel.send("Coloque a url");

  let validador = await ytdl.validateURL(args[0]);

  if (!validador) {
    let commandFile = require("./search");
    commandFile.run(client, message, args, ytdl, search);
  }

  let info = await ytdl.getInfo(args[0]);
  let conectar = await voiceChannel.join();

  let player = await conectar.playStream(ytdl(args[0]), {
    filter: "audioonly"
  });

  message.channel.send(`Tocando: ${info.title}`);
};
