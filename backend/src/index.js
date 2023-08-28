// Importar as funcionalidades do módulo Express
const express = require('express')

// Importando CORS --> segurança
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

// Importando as rotas definidas no arquivo routes.js
const routes = require('./routes')

// Instanciar uma aplicação express
// Essa aplicação terá as rotas e outras funcionalidades
const app = express()
app.use(express.json())


// permite que todas as aplicações front-end acessem o back-end
// possível mudar isso através dos parâmetros
app.use(cors(corsOptions))

app.use(routes)
// Quando acessarmos localhost:3333 a nossa aplicação será acessada
app.listen(3333)