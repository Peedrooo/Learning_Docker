const express = require('express')
const app = express()
const port = 1000

app.get('/', (res) => {
    res.send('Olá minha imagem!')
})

app.listen(port, () => {
    console.log(`Executando na porta: ${port}`)
});
