
let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let str = `
*STATUS*\n
┌────〔 Info 〕───⬣
│✧ NameBot : VenBotz
│✧ Main Owner: Reza
│✧ Operated Since: Lupa gw
│✧ Language Used: Nodejs (JS)
│✧ Server:Heroku
│✧ SC: Chat Owner
╰────────────⬣

┌────〔 Status 〕───⬣
│✧ Aktif selama ${uptime}
│✧ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│✧ *${groups.length}* Grup
│✧ *${chats.length - groups.length}* Chat Pribadi
│✧ *${Object.keys(global.db.data.users).length}* Pengguna
│✧ *${totaljadibot.length}* Jadibot
│✧ *${conn.blocklist.length}* Terblock
│✧ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│✧ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
╰────────────⬣
┌────〔 Pengaturan 〕───⬣
│✧ ${anon ? '✅' : '❌'} *Anon Chat*
│✧ ${anticall ? '✅' : '❌'} *Anti Call*
│✧ ${antispam ? '✅' : '❌'} *Anti Spam*
│✧ ${antitroli ? '✅' : '❌'} *Anti Troli*
│✧ ${backup ? '✅' : '❌'} *Auto Backup DB*
│✧ ${groupOnly ? '✅' : '❌'} *Mode Grup*
│✧ ${jadibot ? '✅' : '❌'} *Jadi Bot*
│✧ ${nsfw ? '✅' : '❌'} *Mode Nsfw*
╰────────────⬣`.trim()
conn.send2But(m.chat, str, wm, 'Info', '.info', 'Owner', '.owner',m)
conn.reply(str)
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
