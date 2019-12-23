exports.run = (client, message, args, ytdl, streamOptions) => {
  let CompleteMessage = message.content.split(" ");
  let youtubeLink = CompleteMessage[1];

  let voiceChannel = message.author.voiceChannel
  );

  if (voiceChannel == null) {
    console.log("Canal não encontrado");
  }

  if (voiceChannel !== null) {
    console.log("Canal encontrado");

    voiceChannel
      .join()
      .then(connection => {
        const stream = ytdl(youtubeLink, {
          filter: "audioonly"
        });

        const DJ = connection.playStream(stream, streamOptions);
        DJ.on("end", end => {
          voiceChannel.leave();
        });
      })
      .catch(console.error);
  }
};
