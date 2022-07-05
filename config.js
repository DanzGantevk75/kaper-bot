let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['6288270863279', 'Danzz', 'Danzz', 'danzkontol@gmail.com', true],
['6288270863279', 'Danzz', 'Danzz', 'Nothing!', true]

]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'http://zekais-api.herokuapp.com': 'zekais',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.WM = '𝑴𝒚𝑩𝒐𝒕-𝑴𝒖𝒍𝒕𝒊 𝑫𝒆𝒗𝒊𝒄𝒆 𝑩𝒚 Danzz'
global.linkgc = 'https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK'
global.linkig = 'https://www.instagram.com/danzgamtenk'
global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '@Danzz'

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'

//========Url Template Buttons==========//
global.dtu = '𝑭𝒐𝒍𝒍𝒐𝒘'
global.urlnya = "https://www.instagram.com/DanzGamtenk"

//============= callButtons ============//
global.dtc = '𝒄𝒂𝒍𝒍 𝒐𝒘𝒏𝒆𝒓'
global.phn = '+62 882-7086-3279'

//========== Tampilan Bot =============//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg', 'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg',
  'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg', 'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg',
  'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg', 'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg',
  'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg', 'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg',
  'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg', 'https://telegra.ph/file/1575c60b4e1663bae8c86.jpg'
]

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/DanzBot')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      gold: '🪙',
      arloji: '🪙',
      potion: '🥤',
      diamond: '💎',
      
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      
      sampah: '🗑',
      
      armor: '🥼',
      fishingrod: '🎣',
      umpan: '🪱',
      pickaxe: '⛏️',
      sword: '⚔️',
      
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      fox: '🦊',
      kuda: '🐴',
      serigala: '🐺',
      phonix: '🦜',
      centaur: '🐎',
      griffin: '🦅',
      naga: '🐉',
      
      foodpet: '🥩',      
      makananpet: '🍖',

      mangga: '🥭',
      apel: '🍎',
      jeruk: '🍊',
      pisang: '🍌',
      anggur: '🍇',
      
      bibit: '🌾',
      
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})


