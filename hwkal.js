// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/DcvNl9t7AVK3w2RLndGNtc'
global.ig = '@rafli6373' // ubah aja
global.email = 'hasyimrafli@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Rafli👑' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6289503961875'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'By : ApexAI' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'By : ApexAI' // ubah aja ini nama sticker
global.author = '6289503961875' // ubah aja ini nama sticker
global.prefa = ['!','!','.',',','🐤','🗿']
global.sessionName = 'session' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})