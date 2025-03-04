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

//PATCH
function corrigeMulher(request, response)
{
    function encontraMulher(mulher)
    {
        if (mulher.id === request.params.id) //encontrar id igual ao que sera informado na requisição
        {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome)
    {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio)
    {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem)
    {
            mulherEncontrada = request.body.imagem
    }


    response.json(mulheres)
}

//DELETE
function deletarMulher(request, response)
{
    function todasMenosEla(mulher)
    {
        if (mulher.id !== request.params.id)
            return mulher
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}

app.use(router.get('/womans', mostrarMulheres)) 
app.use(router.post('/womans', criarMulher )) 
app.use(router.patch('/womans/:id', corrigeMulher )) 
app.use(router.delete('/womans/:id', deletarMulher))


app.listen(porta, mostrarPorta)

//PORTA
function mostrarPorta ()
{
    console.log("Servidor criado e rodando na porta ", porta)
}