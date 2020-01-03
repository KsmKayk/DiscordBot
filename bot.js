const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const ytdl = require("ytdl-core");
const search = require("yt-search");

require("dotenv/config");

client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuarios, 
    em ${client.channels.size} canais, 
    em ${client.guilds.size} servidores`
  );
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
  console.log(
    `O bot entrou no servidor: ${guild.name} (id: ${guild.id}).
     População ${guild.memberCount} membros`
  );
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name}`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(" ");

  const comando = args.shift().toLowerCase();

  if (comando === "ping") {
    return require(`./comandos/${comando}.js`).run(client, message, args);
  }
  if (comando === "play") {
    return require(`./comandos/${comando}.js`).run(
      client,
      message,
      args,
      ytdl,
      search
    );
  }

  if (comando === "search") {
    return require(`./comandos/${comando}.js`).run(
      client,
      message,
      args,
      ytdl,
      search
    );
  }

  if (comando === "leave") {
    return require(`./comandos/${comando}.js`).run(client, message, args);
  }

  if (comando === "help") {
    return require(`./comandos/${comando}.js`).run(client, message, args);
  }
});
//
client.login(process.env.token);
