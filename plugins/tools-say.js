let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Harap Masukkan text!\n\ncontoh:\n${usedPrefix + command} Claraaa`
    conn.reply(m.chat, text, null)
}
handler.help = ['say <teks>']
handler.tags = ['tools']
handler.command = /^(say)$/i

module.exports = handler