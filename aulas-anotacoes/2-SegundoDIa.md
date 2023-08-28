# Segundo dia

- Node.js & Express
    - Rotas e recursos
    - Métodos HTTP
    - Tipos de parâmetros
- Utilizando o Insomnia
    - App desktop que auxilia a testar as rotas
- Configurando Nodemon
    - Automatiza atualizações do Código
    - Toda vez que alteramos o código, o servidor Node é automaticamente reiniciado
- Diferenças entre bancos de dados
- Configurando banco de dados
- Pensando nas entidades e funcionalidades
- Construção do back-end
- Adicionando módulo CORS
- Enviando back-end ao Github

## Node.js & Express

### Express

#### Rotas e recursos
Ao acessar um website, digitamos URL como: http://meusite/users
- Rota --> http://meusite/users (conjunto completo da URL)
- Recurso --> users ( o que vem depois da barra ) 
- / --> página home do website
- /users --> possível página de listagem de usuários

#### Métodos HTTP

- GET: Buscar uma informação do back-end
- POST: Criar uma informação no back-end. Ex: criar um novo usuario
- PUT: Alterar uma informação no back-end. Ex: alterar um dado do usuario
- DELETE: Deletar uma informação no back-end. Ex: deletar um usuario

#### Tipos de parâmetros

Query Params: Parâmetros nomeados enviados na rota após "?"
- Filtros
- Paginação
- ex: /users?name=Matheus
- ex: /users?page=2&nome=Matheus&Idade=23
 
Route Params: Parâmetros utilizados para identificar recursos
- ex: /users/:id --> /users/1

Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
- ex: 
 
Como acessar os parâmeotros

```js
/** 
 * QUERY PARAMS
 * requisição --> http://localhost:3333/users?name=Matheus&idade=23
*/
app.get('/users', (request, response) => {

    const params = request.query
    console.log(params) // {name: 'Matheus', idade: 23}
})

/**
 * ROUTE PARAMS
 * requisição --> http://localhost:3333/users/1
*/
app.get('/users/:id', (request, response) => {

    const params = request.params
    console.log(params) // {id: '1'}
})

/**
 * REQUEST BODY 
 * requisição -->http://localhost:3333/users
*/
app.post('/users', (request, response) => {

    const params = request.body
    console.log(params) // 
})
```

## Utilizando o Insomnia

Software utilizado para testar as rotas e os métodos HTTP
- Cria requisições para todos os métodos HTTP
- Similar ao Postman

Necessário utilizar esse software para testar a nossa aplicação
- O browser só utiliza o método GET

## Configurando nodemon

"npm install nodemon" -D
- "-D" é uma opção para marcar a dependência como "devDependencies"
- Outras pessoas que utilizarão a nossa aplicação não precisarão baixar o nodemon

Criar um script "start" no package.json para utilizar o nodemon ao invés do node

Agora não é mais necessário restartar o server toda vez que alteramos um arquivo

## Diferenças entre bancos de dados

SQL
- Exemplos: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc
- Mais utilizado atualmente
- Permite maior controle da estrutura do BD
- Utilizaremos SQLite
    - Não precisamos baixar nada, SQLite é armazenado como um arquivo .sqlite dentro da aplicação

NoSQL
- Exemplos: MongoDB, CouchDB, etc
- Não estruturado

## Configurando banco de dados

Possíveis comunicações com o Banco de dados
- Driver: SELECT * FROM users
- Query Builder: table('users').select('*').where()
    - Utilizaremos o Query Builder Knex
    - https://knexjs.org/guide/

"npm install knex"
- Instalação do query builder

"npm install sqlite3"
- Instalação do driver de acordo com o BD que utilizaremos

Conexão com o banco de dados
- "npx knex init"
- organizar o ambiente
    - criar diretório "src" e "database"
    - configurar arquivo knexfile.js
    - criar o arquivo db.sqlite no diretório database

## Pensando nas entidades e funcionalidades

Layout (figma) pode ser útil

Entidades
- ONG 
- Caso (Incident)

Funcionalidades
- Login de ONG
- Logout de ONG
- Cadastro de ONG
- Cadastrar casos
- Deletar casos
- Listar casos específicos de uma ONG
- Listar todos os casos
- Entrar em contato com a ONG (via wpp e email)

Criaremos as tabelas no banco de dados utilizando o knex
- Funcionalidade "Migrations"
    - Forma de criar tabelas e manter um histórico do BD

Criar nossa primeira migration
- "npx knex migrate:make create_ongs"
- Documentação: https://knexjs.org/guide/migrations.html#migration-api

Codar o arquivo da Migration
- método up é para criar a tabela
- método down é o que fazer caso der algum problema e for necessário "voltar atrás"

Criar a tabela
- "npx knex migrate:latest"

## Construção do back-end

Cadastro de ONG

Listagem de ONG

Estruturar a aplicação
- Criar diretório controllers
- Controller é um arquivo que contém as funcionalidades de uma dada entidade (cadastro, listagem, deleção, atualização, etc)

## Adicionando módulo CORS

Módulo de segurança

"npm install cors"
- Determina quem vai poder acessar nossa aplicação

Configurar o cors no arquivo index.js