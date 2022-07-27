let handler = function (m) {
  // this.sendContact(m.chat, '6281313726400', 'Rezz Gans', m)
  conn.sendContact(m.chat, '6281248537085' , 'Jomblo—¿', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan GalakÂ² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['owner', 'info']

handler.command = /^(pacarowner)$/i

module.exports = handler


