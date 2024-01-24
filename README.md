# Coffee Delivery

Esse desafio foi proposto dentro da trilha de React da Rocketseat, o objetivo era desenvolver uma aplicação de e-commerce com foco em SPA, Contextos e Reducers.
Para desenvolver essa aplicação foi utilizado as seguintes tecnologias:
- Vite
- ReactJS
- Typescript
- Styled-Components
- React-hook-form
- React-router-dom
- ZOD
- Immer

## Desafios e dificuldes no processo de desenvolvimento
O conhecimento que eu já possuía em lógica de programação e frameworks de estilização como Material-UI foram essenciais na adaptação ao Styled-Components, sua maneira funcional e modular de estilos foi bem tranquila.
O meu maior desafio nesse projeto foi desenvolver a lógica do carrinho de compras junto com contextos e reducers, para facilitar o meu processo de desenvolvimento realizei o mesmo por etapas.
- Primeiro desenvolvi toda a lógica utilizando useState dentro de uma única página (Home);
- Após toda a lógica e funcionalidades prontas migrei o uso para useContext, dentro de pasta própria (Contexts)
- Após toda adequação migrei novamente parte das funcionalidades para utilizar useReducer, separando a arquitetura entre reducers, actions e hooks.

## Como testar
Para testar a aplicação basta baixar o repositório em sua maquina, abrir com o prompt de comandos e digitar os seguintes comandos:
- npm i
- npm run dev
Pronto, a aplicação estará rodando em localhost:5173
