const express = require("express")
const router = express.Router()

//nmp UUID para gerar ID automatico
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(express.json()) //tratando as requisições e os dados que vao trafegar estarão em json
const porta = 3333



const mulheres = 
[
    {
        id: '1',
        nome: 'Thamires Gomes',
        imagem: 'https://www.linkedin.com/in/thamires-gomes-silva-99755aa5/overlay/photo/',
        minibio: 'Engineer Lead'
    },
    {
        id: '2',
        nome: 'Duda Cavalcante',
        imagem: 'https://www.linkedin.com/in/maria-eduarda-goncalves-cavalcante/overlay/photo/',
        minibio: 'Product Owner'
    },
    {
        id: '4',
        nome: 'Poli Piva',
        imagem: 'https://www.linkedin.com/in/poliana-piva/overlay/photo/',
        minibio: 'Software Engineer'
    }

]

//GET
function mostrarMulheres(request, response)
{
    response.json(mulheres)
}

//POST
function criarMulher(request, response)
{
    const novaMulher = 
    {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PORTA
function mostrarPorta ()
{
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/womans', mostrarMulheres)) //configurei rota get womans
app.use(router.post('/womans', criarMulher )) //configurei rota post womans
app.listen(porta, mostrarPorta)