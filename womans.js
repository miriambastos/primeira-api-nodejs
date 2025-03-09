const express = require("express")
const router = express.Router()

const conectaBancoDeDados = require('./bancoDeDados') //ligando ao arquivo BD
conectaBancoDeDados()

const Mulher = require('./womanModel')

const app = express()
app.use(express.json()) //tratando as requisições e os dados que vao trafegar estarão em json
const porta = 3333


//GET
async function mostrarMulheres(request, response)
{
    try 
    {
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)
    }
    catch (erro)
    {
        console.log(erro)
    }
}


//POST
async function criarMulher(request, response)
{
    const novaMulher = new Mulher(
    {
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try
    {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }
    catch (erro)
    {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response)
{
    try
    {
        const mulherEncontrada = await Mulher.findById(request.params.id)

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

            if (request.body.citacao)
            {
                mulherEncontrada = request.body.citacao
            }

            const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

            response.json(mulherAtualizadaNoBancoDeDados)
    } 
    catch (erro)
    {
        console.log(erro)
    }
}

//DELETE
async function deletarMulher(request, response)
{
    try
    {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({menssagem: 'Mulher excluida com sucesso'})
    }

    catch (erro)
    {
        consol.log(erro)
    }
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