const express = require("express")
const router = express.Router() //configuração de rota

const app = express()
const porta = 3333

function mostrarOla(request, response) //requisição e resposta
{
    response.send("Olá Node!")
}

function mostrarPorta ()
{
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/ola', mostrarOla)) //informa que o servidor ele use a rota get chamando o endereço olá
app.listen(porta, mostrarPorta)