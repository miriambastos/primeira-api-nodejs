const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = 
[
    {
        nome: 'Thamires Gomes',
        imagem: 'https://www.linkedin.com/in/thamires-gomes-silva-99755aa5/overlay/photo/',
        minibio: 'Engineer Lead'
    },
    {
        nome: 'Duda Cavalcante',
        imagem: 'https://www.linkedin.com/in/maria-eduarda-goncalves-cavalcante/overlay/photo/',
        minibio: 'Product Owner'
    },
    {
        nome: 'Poli Piva',
        imagem: 'https://www.linkedin.com/in/poliana-piva/overlay/photo/',
        minibio: 'Software Engineer'
    }

]

function mostrarMulheres(request, response)
{
    response.json(mulheres)
}

function mostrarPorta ()
{
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/womans', mostrarMulheres))
app.listen(porta, mostrarPorta)