const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan info transaksi\n\nContoh: !done (ID FF KAMU) NAMA AKUN FF (JUMLAH DIAMOND) SERVER (NOMINAL):', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ BUYER BANG ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('6281248537085@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️pembelian diamond kamu sedang di proses', m)
}
handler.help = ['done <fitur>']
handler.tags = ['shope']
handler.command = /^(done)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
