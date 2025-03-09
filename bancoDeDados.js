const mongoose = require('mongoose')

async function conectaBancoDeDados()
{
   try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://miriamrbastos1:9CH1p88DaV77oeL1@clusterwomans.gahw0.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWomans')

        console.log('Conexão com o banco de dados feito com sucesso!')     
      } catch(erro) 
      
   {
    console.log(erro)
   }
}

module.exports = conectaBancoDeDados
