# Terceiro dia

- Limpando estrutura
- Conceitos do react
    - Componente
    - JSX
    - Propriedades
    - Estado
    - Imutabilidade
- Página de login
- Configurando rotas
- Cadastro de ONGs
- Listagem de casos
- Cadastro de um novo caso
- Conectando aplicação à API
- Enviar ao Github

## Limpando estrutura

Deletar arquivos que não serão necessários
- README.md
- App.css
- App.test.js
- index.css
- logo.svg
- setupTests.js
- public/robots.txt
- public/manifest.json
- logo192png e logo512.png

Deletar os imports desnecessários no index.js e App.js

No arquivo public/index.html deletar as linhas:
```html
<meta
    name="description"
    content="Web site created using create-react-app"
/>

<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<!--
    manifest.json provides metadata used when your web app is installed on a
    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
-->

<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<!--
    Notice the use of %PUBLIC_URL% in the tags above.
    It will be replaced with the URL of the `public` folder during the build.
    Only files inside the `public` folder can be referenced from the HTML.

    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
    work correctly both with client-side routing and a non-root public URL.
    Learn how to configure a non-root public URL by running `npm run build`.
-->
```

## Conceitos do React

Para executar o servidor de desenvolvimento com React
- "npm start"

index.html
- Primeiro arquivo aberto pelo React
- html principal

index.js
- Primeiro arquivo javascript que será lido pelo index.html, mesmo sem ser importado

Functionamento do React
- React monta a estrutura da página a partir do javascript
- Javascript só é executado depois que o html já está montado em tela
- Passo a passo
    - React "joga o HTML em tela"
    - Javascript entra em ação e preenche o restante do código

Componente
- Função que retorna HTML
- Quando esse HTML está escrito dentro de um arquivo .js, isso é denominado JSX (Javascript XML)
- Ex de componente: um Header que se repete em várias páginas do website. Cria-se um componente para que essas páginas o importem e utilizem

JSX (Javascript XML)
- html integrado dentro do javascript

Propriedades (props)
- Análogo aos atributos do HTML --> < h1 id='title' > Hello World </ h1 >
- São atributos repassados para **COMPONENTES** ao invés de elementos html
- Propriedades são passadas como parâmetros para o componente

```js
// Header.js --> Componente
import React from 'react'

export default function Header(props) {
    return (
        <header>
            <h1> {props.title}</h1>
        </header>
    )   
}

// App.js
import React from 'react'

import Header from './Header'

function App() {
    return (
        <Header title="Semana Omnistack" />
    )
}

/**
 * Note que title foi passada como parâmetro para o componente Header
 * Esse parâmetro foi acessado --> props.title
```

Sempre que precisarmos injetar código javascript DENTRO DO HTML utilizamos as {}

Estado (useState) e Imutabilidade
- É uma informação que será mantida pelo componente
- Pode ser modificado pelo componente
- Toda vez que é alterado, o componente renderiza novamente, exibindo as novas informações em tela

```js
// App.js
import React, { useState } from 'react'

import Header from './Header'

function App() {

    const [counter, setCounter] = useState(0) 

    /**
     * retorno do useState() --> Array == [valor, funcaoDeAtualizacao]
     * 
     * notação "[]" acima é utilizada para desestruturar esse Array retornado
     *      counter recebe o valor
     *      setCounter recebe a funcao de atualizacao
    */ 

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <Header>Contador: {header}</Header>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}
```

## Página de login

Cirar diretório src/assets
- heroes.png e logo.svg

Criar diretório src/pages
- Criar Um diretório para cada página da aplicação

Criar arquivo css global em src/global.css
- Contém estilizações que terão em todas as páginas
- Ex: importação de fontes
- Importar global.css no App.js

Codar página de Logon

"npm install react-icons"
- Pacote que contém icones

## Configurando rotas

"npm install react-router-dom"
- Pacote que lida com as rotas da aplicação

Criar arquivo src/routes.js
- Codar

Criar diretorio src/pages/Register
- src/pages/Register/index.js
- src/pages/Register/style.css
- Codar

## Cadastro de ongs

Criar diretorio src/pages/Profile
- src/pages/Profile/index.js
- src/pages/Profile/style.css
- Codar

## Cadastro de um novo caso

Criar diretorio src/pages/NewIncident
- src/pages/NewIncident/index.js
- src/pages/NewIncident/style.css
- Codar

## Conectando aplicação à API

Deixar o backend executando em um outro terminal

"npm install axios"
- Instalação do cliente HTTP axios
- Responsável por fazer as chamadas da nossa API do backend e obter as respostas

Criar diretorio src/services
- Criar arquivo src/servicespi.js
- Codar

Integrar a API nas páginas
- Register, Profile, NewIncident