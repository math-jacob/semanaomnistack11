// Importar as funcionalidades do módulo Express
const express = require('express')

// Importando CORS --> segurança
const cors = require('cors')

// Importando as rotas definidas no arquivo routes.js
const routes = require('./routes')

// Instanciar uma aplicação express
// Essa aplicação terá as rotas e outras funcionalidades
const app = express()

app.use(express.json())
app.use(routes)

// permite que todas as aplicações front-end acessem o back-end
// possível mudar isso através dos parâmetros
app.use(cors())

// Quando acessarmos localhost:3333 a nossa aplicação será acessada
app.listen(3333)