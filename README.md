🌟 Mulheres na Tecnologia - API

Esta API lista mulheres inspiradoras que atuam na tecnologia. O objetivo é destacar suas contribuições e incentivar mais pessoas a conhecerem suas histórias.

🚀 Tecnologias Utilizadas

    Node.js - Ambiente de execução JavaScript
    Express - Framework para criação de APIs
    MongoDB - Banco de dados NoSQL
    Render - Plataforma de hospedagem

📌 Funcionalidades

    Listar todas as mulheres cadastradas
    Buscar uma mulher específica pelo nome
    Adicionar novas mulheres ao banco de dados
    Atualizar informações de uma mulher cadastrada
    Remover um registro

🛠 Como Rodar o Projeto
1️⃣ Pré-requisitos

    Node.js instalado
    MongoDB configurado (ou use um banco na nuvem, como o MongoDB Atlas)

2️⃣ Clonar o Repositório

git clone https://github.com/miriambastos/primeira-api-nodejs

3️⃣ Instalar Dependências

npm install

4️⃣ Criar um arquivo .env

Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias, como a URL do MongoDB:

MONGODB_URI=sua_url_do_mongo

PORT=3333

5️⃣ Rodar a Aplicação

npm start

ou, se estiver usando nodemon:

npm run dev

📡 Endpoints

GET	/womans	 - Lista todas as mulheres

GET	/womans/:id	 - Retorna uma mulher específica

POST	/womans	- Adiciona uma nova mulher

PUT	/womans/:id	- Atualiza uma mulher existente

DELETE	/womans/:id	- Remove uma mulher

🌍 API em Produção

A API está hospedada no Render:

🔗 URL da API https://primeira-api-nodejs.onrender.com/womans

🔗 URL do frontend https://frontend-react-apinode.vercel.app/

✨ Contribuição

Sinta-se à vontade para abrir issues e contribuir! 🚀
