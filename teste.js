const fs = require('fs')

const i = "<html><head></head><body><h1>KrypthonVerse</h1><p>A krypthonVerse é uma empresa criada pelo mocambicano Raimundo Chigarisso com o objectivo de </body></html>"
fs.writeFileSync('./text/index.html', i)