module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "✨",
  category: "Core",
  start: async (
    Miku,
    m,
    { prefix, pushName, NSFWstatus, args, commands, text }
  ) => {
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `🍁Command : ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`👾Alias : ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`⏱️Cooldown: ${cmd.cool}`);
      if (cmd.desc) data.push(`🧾Description : ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `💡Example : ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `ℹ️Command Info\n\n${data.join("\n")}`,
        footer: `${botName}`,
        buttons: buttonss,
        headerType: 1,
      };
      return Miku.sendMessage(m.from, buth, { quoted: m });
    } else {
      const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());

const now = new Date();
        const hour = now.getHours();
       let greeting;

        if (hour >= 0 && hour < 12) {
          greeting = "Ohayou gozaimasu"; //good morning
        } else if (hour >= 12 && hour < 18) {
          greeting = "Konnichiwa"; //good afternoon
        } else {
          greeting = "Hello"; //good evening
        }
      let textHelpMenu = `${greeting} *${pushName}* dear friend,

I am *${botName}*, a bot developed by *N.C.T Association*.

🎀 My prefix is: *${prefix}*

🧩 Server Uptime: *${uptime()}*

*Here's the list of my Commands*.\n
           
     *[ Core ]*

🎐 ʜɪ, ʜᴇʟᴘ, 
🎐 ᴄᴏᴜᴘʟᴇᴘᴘ, ᴏᴡɴᴇʀ, 
🎐 ꜱᴄʀɪᴘᴛ, ꜱᴛᴀʟᴋ, 
🎐 ꜱᴜᴘᴘᴏʀᴛ, ʀᴀɴᴋ
╰──────────────────╯

     *[ Group ]*

🏮 ᴀᴅᴍɪɴꜱ, ᴀɴɴᴏᴜɴᴄᴇ,
🏮 ᴀɴᴛɪʟɪɴᴋɢᴄ, ʙᴏᴛꜱᴡɪᴛᴄʜ, 
🏮 ᴄʜᴀɴɢᴇɢᴄɴᴀᴍᴇ, ᴄʜᴀᴛʙᴏᴛɢᴄ, 
🏮 ᴅᴇʟᴇᴛᴇ, ᴘʀᴏᴍᴏᴛᴇ, 
🏮 ᴅᴇᴍᴏᴛᴇ, ɢᴄʟɪɴᴋ, 
🏮 ɢʀᴏᴜᴘ, ɢʀᴏᴜᴘɪɴꜰᴏ, 
🏮 ʜɪᴅᴇᴛᴀɢ, ʟᴇᴀᴠᴇ, 
🏮 ɴꜱꜰᴡ, ʀᴇᴍᴏᴠᴇ, 
🏮 ʀᴇᴘᴏʀᴛ, ʀᴇᴠᴏᴋᴇ, 
🏮 ꜱᴇᴛɢᴄᴅᴇꜱᴄ, ꜱᴇᴛᴘᴘɢᴄ, 
🏮 ᴛᴀɢᴀʟʟ, ᴡᴇʟᴄᴏᴍᴇ
╰──────────────────╯

      *[ Mods ]*

🎀 ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴇᴛᴇᴍᴏᴅ, 
🎀 ʙᴀɴ, ᴜɴʙᴀɴ, 
🎀 ʙᴀɴɢᴄ, ᴜɴʙᴀɴɢᴄ, 
🎀 ʙʟᴏᴄᴋ, ᴜɴʙʟᴏᴄᴋ, 
🎀 ʙʀᴏᴀᴅᴄᴀꜱᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
🎀 ᴍᴏᴅᴇ, ʙᴀɴʟɪꜱᴛ, 
🎀 ᴘᴍᴄʜᴀᴛʙᴏᴛ, ᴄʜᴀʀʟɪꜱᴛ, 
🎀 ꜱᴇᴛᴄʜᴀʀᴀᴄᴛᴇʀ
╰──────────────────╯
 
      *[ Media ]*

💫 ɪɢᴅʟ,  
💫 ꜱᴏɴɢ <ꜱᴏɴɢ ɴᴀᴍᴇ>, 
💫 ᴠɪᴅᴇᴏ <ᴠɪᴅᴇᴏ ɴᴀᴍᴇ>, 
💫 ʏᴛᴍᴘ3 <ʟɪɴᴋ>, 
💫 ʏᴛᴍᴘ4 <ʟɪɴᴋ>, 
💫 ʏᴛᴅᴏᴄ <ʟɪɴᴋ>
💫 ᴘʟᴀʏʟɪꜱᴛ, ʏᴛꜱ,
💫 ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ <ʟɪɴᴋ>,
💫 ᴛɪᴋᴛᴏᴋᴠɪᴅᴇᴏ <ʟɪɴᴋ>, 
💫 ᴛɪᴄᴛᴏᴋᴅᴏᴄ <ʟɪɴᴋ>,
╰──────────────────╯

    *[ Search ]*

🔎 ᴀɴɪᴍᴇ, ɢɪꜰꜱᴇᴀʀᴄʜ, 
🔎 ɢɪᴍᴀɢᴇ, ᴘɪɴᴛᴇʀᴇꜱᴛ, 
🔎 ɢɪᴛʜᴜʙ, ɢᴏᴏɢʟᴇ,
🔎 ʟʏʀɪᴄꜱ, ʀɪɴɢᴛᴏɴᴇ, 
🔎 ꜱᴛɪᴄᴋᴇʀꜱᴇᴀʀᴄʜ, ᴡᴇᴀᴛʜᴇʀ, 
🔎 ʏᴏᴜᴛᴜʙᴇꜱᴇᴀʀᴄʜ
╰──────────────────╯

   *[ Utilities ]*

🎗 ᴇᴍᴏᴊɪᴍɪx, Q / Qᴜᴏᴛᴇ, 
🎗 ꜱᴛɪᴄᴋᴇʀ, ꜱᴛɪᴄᴋᴇʀᴄʀᴏᴘ, 
🎗 ꜱᴛᴇᴀʟ, ᴛᴏᴀᴜᴅɪᴏ, 
🎗 ᴛᴏᴍᴘ3, ᴛᴏᴍᴘ4, 
🎗 ᴛᴏᴜʀʟ, ꜱᴛɪᴄᴋᴇʀᴍᴇᴍᴇ,
🎗 ᴛᴇxᴛᴅᴇꜱɪɢɴ
╰──────────────────╯

  *[ Image Edit ]*

💠 ʙʟᴜʀ, ᴄɪʀᴄʟᴇ, 
💠 ᴊᴀɪʟ, ʀᴇᴍᴏᴠᴇʙɢ, 
💠 ᴛʀɪɢɢᴇʀ
╰──────────────────╯

  *[ Audio Edit ]*

🎧 ʙᴀꜱꜱ, ʙʟᴏᴡɴ, 
🎧 ᴅᴇᴇᴘ, ꜰᴀᴛ, 
🎧 ɴɪɢʜᴛᴄᴏʀᴇ, ʀᴇᴠᴇʀꜱᴇ, 
🎧 ʀᴏʙᴏᴛ, ꜱʟᴏᴡ, 
🎧 ꜱᴍᴏᴏᴛʜ, ᴛᴇᴍᴘᴏ
╰──────────────────╯

   *[ Essentials ]*
   

🧩 ᴇʟᴇᴍᴇɴᴛ, ꜱᴄʀᴇᴇɴꜱʜᴏᴛ
🧩 Qᴜᴇꜱᴛɪᴏɴ, ꜱᴀʏ, 
🧩 ꜱᴀʏᴊᴀᴘᴀɴᴇꜱᴇ, ꜱᴀʏʙᴇɴɢᴀʟɪ, 
🧩 ꜱᴀʏʜɪɴᴅɪ, ᴜᴅɪᴄᴛɪᴏɴᴀʀʏ
╰──────────────────╯

      *[ Weeb ]*

 🧧 ᴀɴɪᴍᴇQᴜᴏᴛᴇ, ᴄᴏꜱᴘʟᴀʏ, 
 🧧 ᴄᴏꜱᴘʟᴀʏᴠɪᴅᴇᴏ, ꜰᴏxɢɪʀʟ, 
 🧧 ᴍᴀɪᴅ, ᴡᴀʟʟᴘᴀᴘᴇʀ, 
 🧧 ᴡᴀɪꜰᴜ
╰──────────────────╯

   *[ Reactions ]*

 🎋 ʙᴇʜᴀᴘᴘʏ, ʙɪᴛᴇ, 
 🎋 ʙᴏɴᴋ, ʙᴜʟʟʏ, 
 🎋 ᴄʀʏ, ᴅᴀɴᴄᴇ, 
 🎋 ʜᴀɴᴅʜᴏɴᴅ, ʜᴀᴘᴘʏ, 
 🎋 ʜɪɢʜꜰɪᴠᴇ, ʜᴜɢ, 
 🎋 ᴋɪᴄᴋ, ᴋɪʟʟ, 
 🎋 ᴋɪꜱꜱ, ᴘᴀᴛ, 
 🎋 ꜱʟᴀᴘ, ꜱᴍɪʟᴇ, 
 🎋 ᴡᴀᴠᴇ, ᴡɪɴᴋ, 
 🎋 ʏᴇᴇᴛ
╰──────────────────╯

   *[ Logo Maker ]*

 🎄 3ᴅᴄʜʀɪꜱᴛᴍᴀꜱ, 3ᴅɴᴇᴏɴ, 
 🎄 3ᴅꜱᴘᴀᴄᴇ, 3ᴅꜱᴛᴏɴᴇ,
 🎄 ʙᴇᴀʀ, ʙʟᴀᴄᴋᴘɪɴᴋ,
 🎄 ʙʟᴏᴏᴅ, ʙᴏᴋᴇʜ, 
 🎄 ᴄᴀɴᴅʏ, ᴄᴀʀʙᴏɴ, 
 🎄 ᴄʜᴏᴄᴏʟᴀᴛᴇ, ᴄʜʀɪꜱᴛᴍᴀꜱ, 
 🎄 ᴄɪʀᴄᴜɪᴛ, ᴄʟᴏᴜᴅ, 
 🎄 ᴅᴇᴇᴘꜱᴇᴀ, ᴅᴇᴍᴏɴ, 
 🎄 ᴅʀᴏᴘᴡᴀᴛᴇʀ, ɢʟɪᴛᴄʜ, 
 🎄 ɢʟɪᴛᴄʜ2, ɢʟɪᴛᴄʜ3 
 🎄 ɢʀᴀꜰꜰɪᴛɪ, ʜᴏʟʟᴏɢʀᴀᴘʜɪᴄ, 
 🎄 ᴊᴏᴋᴇʀ, ʟɪᴏɴ , ᴍᴀɢᴍᴀ, 
 🎄 ᴍᴀᴛʀɪx, ɴᴇᴏɴ, 
 🎄 ɴᴇᴏɴᴅᴇᴠɪʟ, ɴᴇᴏɴɢʀᴇᴇɴ, 
 🎄 ɴᴇᴏɴʟɪɢʜᴛ, ᴘᴀᴘᴇʀᴄᴜᴛ, 
 🎄 ᴘᴇɴᴄɪʟ, ᴘᴏʀɴʜᴜʙ, 
 🎄 ꜱᴄɪꜰɪ, ꜱᴘᴀʀᴋʟᴇᴄʜʀɪꜱᴛᴍᴀꜱ, 
 🎄 ᴛʜᴜɴᴅᴇʀ, ᴛʜᴜɴᴅᴇʀ2, 
 🎄 ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ, ᴡᴀʟʟ,
 🎄 ᴡᴏʟꜰ

╰──────────────────╯
   
  *[ Mine Craft ]*

🎒 ʙᴜʏ, ɪɴᴠᴇɴᴛᴏʀʏ, 
🎒 ᴍɪɴᴇ, ꜱʜᴏᴘ, 
🎒 ʀᴇɢ-ɪɴᴠ, 

╰──────────────────╯
   
   *[ ECONOMY ]*
 🔖 ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ, 
 🔖 ᴅᴀɪʟʏ, ᴅᴇᴘᴏꜱɪᴛ, 
 🔖 ɢᴀᴍʙʟᴇ, ʟʙ, 
 🔖 ʀᴏʙ, ꜱʟᴏᴛ, 
 🔖 ᴛʀᴀɴꜱꜰᴇʀ, ᴡᴀʟʟᴇᴛ, 
 🔖 ᴡɪᴛʜᴅʀᴀᴡ
 
╰──────────────────╯\n\n`;

      if (NSFWstatus == "true") {
        textHelpMenu += `[ NSFW ]

 💦 xᴠɪᴅᴇᴏꜱ <ᴀɴʏ ꜱᴇᴀʀᴄʜ ᴛᴇʀᴍ>
 💦 ʜᴇɴᴛᴀɪᴠɪᴅᴇᴏ
 💦 ᴘᴜꜱꜱʏ, ꜱᴘʀᴇᴀᴅᴘᴜꜱꜱʏ,
 💦 ɢᴇɴꜱʜɪɴ, ꜱQᴜɪʀᴛ,
 💦 ɢʟᴀꜱꜱᴇꜱ, ꜱᴜɴɢʟᴀꜱꜱᴇꜱ,
 💦 ꜱᴡɪᴍꜱᴜɪᴛ, ꜱᴄʜᴏᴏʟꜱᴡɪᴍꜱᴜɪᴛ,
 💦 ʜᴏʟᴏ ʟɪᴠᴇ, ᴀꜱꜱ,
 💦 ᴜɴᴅᴇʀᴡᴇᴀʀ, ɴɪᴘᴘʟᴇꜱ,
 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ɴɪᴘᴘʟᴇꜱ,
 💦 ᴜɴᴄᴇɴꜱᴏʀᴇᴅ, ꜱᴇx,
 💦 ꜱᴇx2, ꜱᴇx3,
 💦 ʙʟᴏɴᴅᴇ, ᴛᴡɪɴᴛᴀɪʟꜱ,
 💦 ʙʀᴇᴀꜱᴛꜱ, ᴛʜɪɢʜʜɪɢʜꜱ,
 💦 ꜱᴋɪʀᴛ, ɢᴀᴍᴇᴄɢ,
 💦 ᴀɴɪᴍᴀʟᴇᴀʀꜱ, ꜰᴏxɢɪʀʟ,
 💦 ᴅʀᴇꜱꜱ, ꜱᴄʜᴏᴏʟᴜɴɪꜰᴏʀᴍ,
 💦 ᴛᴡᴏɢɪʀʟꜱ, ɢʟᴏᴠᴇꜱ,
 💦 ᴠᴏᴄᴀʟᴏɪᴅ, ᴛᴏᴜʜᴏᴜ,
 💦 ᴡᴇᴀᴘᴏɴ, ᴡɪᴛʜꜰʟᴏᴡᴇʀꜱ,
 💦 ᴘɪɴᴋʜᴀɪʀ, ᴄʟᴏᴜᴅꜱᴠɪᴇᴡ,
 💦 ᴡʜɪᴛᴇ, ᴀɴɪᴍᴀʟ,
 💦 ᴛᴀɪʟ, ɴᴜᴅᴇ,
 💦 ᴘᴏɴʏᴛᴀɪʟ, ʙᴇᴅ,
 💦 ᴡʜɪᴛᴇ ʜᴀɪʀ, ʀɪʙʙᴏɴꜱ,
 💦 ᴊᴀᴘᴀɴᴇꜱᴇᴄʟᴏᴛʜꜱ, 
 💦 ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ,
 💦 ʙɪᴋɪɴɪ, ʙᴀʀᴇꜰᴏᴏᴛ,
 💦 ɴᴏʙʀᴀ, ꜰᴏᴏᴅ,
 💦 ᴡɪɴɢꜱ, ᴘᴀɴᴛʏʜᴏꜱᴇ,
 💦 ᴏᴘᴇɴꜱʜɪʀᴛ, ʜᴇᴀᴅʙᴀɴᴅ,
 💦 ᴘᴇɴɪꜱ, ᴄʟᴏꜱᴇ,
 💦 ᴡᴇᴛ, ᴄᴀᴛɢɪʀʟ,
 💦 ᴡᴏʟꜰɢɪʀʟ, ɴᴇᴋᴏ,
 💦 ʟᴏʟɪ, ꜱᴘʀᴇᴀᴅʟᴇɢꜱ,
 💦 ʙʀᴀ, ꜰᴀᴛᴇꜱᴇʀɪᴇꜱ,
 💦 ᴛʀᴇᴇ, ᴇʟʙᴏᴡɢʟᴏᴠᴇꜱ,
 💦 ɢʀᴇᴇɴʜᴀɪʀ, ʜᴏʀɴꜱ,
 💦 ᴡɪᴛʜᴘᴇᴛᴀʟꜱ, ᴅʀᴜɴᴋ,
 💦 ᴄᴜᴍ, ʜᴇᴀᴅ ᴅʀᴇꜱꜱ,
 💦 ᴛɪᴇ, ꜱʜᴏʀᴛꜱ,
 💦 ᴍᴀɪᴅ, ʜᴇᴀᴅᴘʜᴏɴᴇꜱ,
 💦 ᴀɴᴜꜱᴠɪᴇᴡ, ɪᴅᴏʟ,
 💦 ɢᴜɴ, ꜱᴛᴏᴄᴋɪɴɢꜱ,
 💦 ᴛᴇᴀʀꜱ, ʙʀᴇᴀꜱᴛʜᴏʟᴅ,
 💦 ɴᴇᴄᴋʟᴀᴄᴇ, ꜱᴇᴇᴛʜʀᴏᴜɢʜ,
 💦 ʙᴜɴɴʏᴇᴀʀꜱ, ʙᴜɴɴʏɢɪʀʟ,
 💦 ᴛᴏᴘʟᴇꜱꜱ, ʙᴇᴀᴄʜ,
 💦 ᴇʀᴇᴄᴛɴɪᴘᴘʟᴇꜱ, ʏᴜʀɪ,
 💦 ᴠᴀᴍᴘɪʀᴇ, ꜱʜɪʀᴛ,
 💦 ᴘᴀɴᴛʏᴘᴜʟʟ, ᴛᴏʀɴᴄʟᴏᴛʜᴇꜱ,
 💦 ʙᴏɴᴅᴀɢᴇ, ꜰɪɴɢᴇʀɪɴɢ
 💦 ʙᴇʟʟ, ꜱʜɪʀᴛʟɪꜰᴛ,
 💦 ᴛᴀᴛᴛᴏᴏ, ᴄʜᴀɪɴ,
 💦 ꜰʟᴀᴛᴄʜᴇꜱᴛ 

╰──────────────────╯\n\n`;
      }

 _Powered By:_ *Team N.C.T*

🎀 To use any of these commands type " *${prefix}Command name* ".

🧩 To report any issues to Developer type " *${prefix}report <describe issue>* ".\n`;

      await Miku.sendMessage(m.from, {video: { url: botVideo }, gifPlayback: true, caption: textHelpMenu,}, { quoted: m });
    }
  },
};
