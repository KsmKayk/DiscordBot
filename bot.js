const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
require("dotenv/config");

client.on("ready", () => {
  console.log(
    `Bot foi iniciado, com ${client.users.size} usuarios, 
    em ${client.channels.size} canais, 
    em ${client.guilds.size} servidores`
  );
  client.user.setGame(`Estou em ${client.guilds.size} servidores`);
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
    .split(/ +/g);

  const comando = args.shift().toLowerCase();
  let comandojs = require(`./comandos/${comando}.js`);

  if (comando === "ping") return comandojs.run(client, message, args);
});

client.login(process.env.token);
