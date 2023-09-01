# Projeto TrybeSmith

Projeto realizado durante módulo de Back-end do curso de desenvolvimento web da Trybe.


  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto desenvolvi uma API e um banco de dados para uma loja de itens medievais utilizando Typescript e arquitetura MSC.

  Nesta aplicação, é possível realizar as operações básicas `CRUD`, em um determinado banco de dados.

  A aplicação foi desenvolvida com:

  - `Node.js`
  - `TypeScript`
  - `JWT`
  - `Arquitetura MSC`
  - `docker`
  - `docker-compose`
  - `MySql`
  - `Express`;

  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.

- `docker-compose up -d`
- `docker exec -it trybesmith bash`
- `npm install`
- `npx db:reset`
- `npm run dev`

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- `npm install`
- `npx db:reset`
- `npm run dev`

