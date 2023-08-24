# Terceiro dia

- Instalando Expo
- Criando projecto React native
- Executando projeto
    - No celular
    - Emuladores
    - Expo Snack
- Diferenças para o ReactJS
    - Elementos HTML
    - Semântica
    - Estilização
        - Flexbox
        - Propriedades
        - Herança de Estilo
        - Estilização Própria
- Ícone e splash screen
- Configurando a navegação
- Página de casos
- Detalhe do caso
- Abrindo Whatsapp e E-mail
- Conexão com a API
- Enviando projeto ao Github

## Instalando Expo e Criando projecto React Native

"npm install -g expo-cli"
- -g para instalar de maneira global e não só para este projeto

"expo init NOME_PROJETO"
- criação do projeto
- No nosso caso, "expo init mobile"

## Executando Projeto

Na pasta do seu projeto
- yarn start
- Alterar app.json
    - "name": "Be The Hero",
    - "slug": "bethehero",
    
## Diferenças para o ReactJS

React.js:
- Há a presença de web semantica
    - < div > < span >
- Tags
    - h1, h2, p
- Estilização
    - classname e id referenciam o arquivo CSS
    - flexbox NÃO É padrão
    - Propriedades tem a forma --> background-color
    - Existe herança de estilos


React Native:
- Não tem semantica
- Tags
    - View, Text
- Estilização
    - Classe StyleSheet do react-native
        - Usar o método create() da classe StyleSheet para fazer os estilos
    - Todos os elementos ja tem display:flex por padrão
    - Propriedades tem a forma --> backgroundColor
    - Não existe herança de estilos
        - Temos que fazer uma estilização própria para cada elemento

## Ícones e Splash screen

Splash screen
- Tela quando faz reload

Colocar icon.png e splash.png no diretório assets

## Configurando a navegação

Criar diretórios e páginas
- src
- src/Incidents
- src/Incidents/index.js
- src/Incidents/styles.js
- src/Detail
- src/Detail/index.js
- src/Detail/styles.js
- src/routes.js

Codar essas páginas

Navegação --> React Navigation
- Documentação: https://reactnavigation.org/docs/getting-started/
- "npm install @react-navigation/native"
- "npx expo install react-native-screens react-native-safe-area-context"

Utilizaremos navegação stack
- "npm install @react-navigation/native-stack"

## Página de caso e Detalhe do Caso

Estilizações de acordo com video aula!!

OBS: foi utilizado o pacote Constants para estilizar o container da página Incidents
- "expo install expo-constants"

## Abrindo WhatsApp e Email

Para fazer funcionalidade de email na página de Detail
- "expo install expo-mail-composer"

Para integrar com whatsapp
- Utilizar "deep linking"
- import Linking from react-native

## Conexão com a API

"npm install axios"
- axios --> cliente HTTP responsável por fazer chamdas a API e trazer os resultados do nosso back-end

Criar arquivo /src/services/api.js
- Codar

useEffect
- Função que será disparada quando as variáveis passadas pelo parâmetro mudarem

Para converter a propriedade "Valor" dos Incidents
- "npm install intl"
- Pacote que adiciona a funcionalidade intl dentro do contexto em que a aplicação está sendo executada
- importar o intl no arquivo App.js para que fique disponível para todos os arquivos