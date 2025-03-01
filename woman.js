const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333


function mostrarMulheres(request, response)
{
    response.json
    ({
        nome: 'Thamires Gomes',
        imagem: 'https://www.linkedin.com/in/thamires-gomes-silva-99755aa5/overlay/photo/',
        minibio: 'Engineer Lead'
    })
}

function mostrarPorta ()
{
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/woman', mostrarMulheres))
app.listen(porta, mostrarPorta)