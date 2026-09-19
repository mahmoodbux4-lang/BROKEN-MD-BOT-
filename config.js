const fs = require('fs')

global.owner = "923203734432" //owner number
global.footer = "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ BroKEN 𝗠𝗗" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['923203734432']
global.xprefix = '.'
global.gambar = "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png"
global.OWNER_NAME = "@shahbazjatoi786" //
global.DEVELOPER = ["7297849559"] //
global.BOT_NAME = "BROKEN MD BOT"
global.bankowner = "BROKEN MD BOT"
global.creatorName = "BROKEN"
global.ownernumber = '923203734432'  //creator number
global.location = "Pakistan, Panjab, Bahawalpur"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "SHAHBAZ-BROKE" //footer section
global.link = "https://chat.whatsapp.com/Kh44MFOre1oB0pufx46J8w/"
global.autobio = true//auto update bio
global.botName = "BROKEN MD BOT"
global.version = "2.0"
global.botname = "BROKEN MD BOT
global.author = "BROKEN MD BOT"
global.themeemoji = ''
global.wagc = 'https://chat.whatsapp.com/Kh44MFOre1oB0pufx46J8w'
global.thumbnail = 'https://up6.cc/2026/06/178161585091181.jpg'
global.richpp = ' '
global.packname = "BROKEN MD BOT"
global.author = "\n\n\n\n\nCreate by ⌞☠︎︎⌝ •ᅳ BROKEN MD BOT"
global.creator = "923203734432@s.whatsapp.net"
global.ownername = 'BROKEN' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 𓆩 BROKEN 𓆪 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 BROKEN MD BOT*`
  global.mess = {
wait: "```WAIT FOR ⌞☠︎︎⌝ •ᅳ BROKEN```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔",
   on: "bot active", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "bot off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by silver",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for silver beloved Premium users",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = false //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
