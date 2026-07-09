# 💼 Job Finder

Na minha jornada de aprendizagem na programação, este foi meu primeiro projeto em que tive contato com o `back-end`.

Ele consiste basicamente em um portal de vagas de emprego focado na área de tecnologia, desenvolvido com **Node.js** e estruturado na arquitetura **MVC (Model-View-Controller)**. Este projeto utiliza o conceito de _Server-Side Rendering_ (SSR) para gerar as telas dinamicamente no servidor antes de enviá-las ao navegador do usuário.

## 💻 Tecnologias Utilizadas

- **Node.js & Express:** Criação do servidor, rotas e interceptadores.
- **Sequelize:** ORM utilizado para gerenciar e consultar o banco de dados via código JavaScript, sem a necessidade de escrever queries SQL puras.
- **SQLite:** Banco de dados relacional leve e embutido, ideal para o desenvolvimento local da aplicação.
- **Handlebars:** Motor de templates responsável por injetar os dados do back-end diretamente no HTML.
- **Docker:** Projeto containerizado para garantir que o ambiente de execução seja idêntico em qualquer máquina.

## ✨ Funcionalidades

- **Listagem de Vagas:** Exibição dinâmica de todas as oportunidades cadastradas no banco de dados, ordenadas pelas mais recentes.
- **Busca Inteligente:** Barra de pesquisa que filtra as vagas pelo título utilizando o operador `LIKE` no banco de dados (ex: buscando por "Press" retorna "WordPress").
- **Detalhes da Vaga:** Uma página dedicada (`/view/:id`) para mostrar todos os dados de uma oportunidade específica (empresa, salário, descrição e contato).
- **Publicação de Oportunidades:** Formulário integrado (`/add`) que recebe as informações do usuário e cadastra uma nova vaga diretamente no SQLite.

## 🚀 Como Executar o Projeto

**Pré-requisitos:** Ter o `Docker` ou `Node.js v.24` em sua máquina.

### 📦 -> Via Docker

1. Clone o repositório.
2. Na raiz do projeto, abra o terminal e rode o comando abaixo:

```
docker compose up -d
```

3. Acesse http://localhost:3000 no seu navegador.

### 🟩 -> Node.js v.24

1. Clone o repositório.
2. Com o terminal aberto **dentro da pasta backend**, instale as dependências executando `npm install`.
3. Com o terminal aberto **dentro da pasta backend**, inicie o servidor de desenvolvimento com o comando:

```
npm run dev
```

4. Acesse http://localhost:3000 no seu navegador.

## 🧠 Oportunidades de Melhoria

Este projeto serviu como um primeiro contato para os fundamentos do desenvolvimento `Back-end com Node.js`. Aqui estão algumas melhorias pensadas para uma implementação futura:

- **Autenticação de Usuários:** Criar um sistema de login para que apenas usuários cadastrados possam publicar ou deletar vagas.

- **Painel de Administração:** Uma rota privada onde o dono da vaga possa gerenciar (editar/excluir) as oportunidades que ele mesmo criou.

- **Migração para API REST + Front-end Moderno:** Desvincular o Handlebars e transformar o Node.js em uma API pura (retornando JSON), construindo o front-end separadamente com uma biblioteca como React.js.

- **Paginação:** Limitar o número de vagas na página inicial (ex: 10 por página) para não sobrecarregar o banco de dados quando houver milhares de registros.
