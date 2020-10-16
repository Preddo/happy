<!--Banner e logo-->
<img alt="Proffy" src="./assets/Header.png"/>

<!-- Badges -->
<p align="center">
  <a target="_blank" href="https://www.linkedin.com/in/pedro-soares-0a075916a/">
      <img alt="Pedro Soares" src="https://img.shields.io/badge/-Pedro Soares-FFD666?style=flat&logo=Linkedin&logoColor=black" />
  </a>

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Preddo/happy?color=FFD666">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Preddo/happy?color=FFD666">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Preddo/happy?color=FFD666">

  <a href="https://github.com/Preddo/happy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Preddo/happy?color=FFD666">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-FFD666">
</p>

<!-- Index -->
<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demo-da-aplicação-web">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-aplicadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requerimentos">Requerimentos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;
</p>

<!-- Projeto -->
## Projeto

#### Objetivo
O Happy surgiu com a missão de trazer felicidade para todas as crianças que estão em instituições de acolhimento, unindo pessoas que se importam com elas aos lugares onde moram. Todo o desenvolvimento foi feito na semana do dia das crianças.

#### Funcionalidades

###### Frontend Web
* Instituições de acolhimento podem se cadastrar na plataforma através de um formulário no qual preenchem seus dados.
* Pessoas podem explorar institutos de acolhimento cadastrados na plataforma por meio de um mapa que mostra os institos próximos a onde elas estão.
* Pessoas podem entrar em contato direto com os institutos de acolhimento por whatsapp.
  
###### Frontend Mobile
* Instituições de acolhimento podem se cadastrar na plataforma através de um formulário no qual preenchem seus dados.
* Pessoas podem explorar institutos de acolhimento cadastrados na plataforma por meio de um mapa que mostra os institos próximos a onde elas estão.
* Pessoas podem entrar em contato direto com os institutos de acolhimento por whatsapp.

<!-- Demo da Aplicação Web -->
## Demo da Aplicação Web
![Web Application](assets/ProffyWebDemo.gif)

<!-- Demo da Aplicação Mobile -->
## Demo da Aplicação Mobile
![Mobile Application](assets/ProffyMobileDemo.gif)

<!-- Tecnologias Aplicadas -->
## Tecnologias Aplicadas

#### Backend
O servidor foi construído em **Node.js** utilizando o **SQLite3** para administrar um banco de dados local e o **Typeorm** como Object Relational Mapper oficial. Para criar e gerir as rotas foi utilizado o micro-framework **Express**.

#### Frontend Web
Para construir o frontend web foi utilizado o framework **Next.js**, baseado na biblioteca **ReactJS**, que adiciona novas funcionalidades à aplicação frontend, como Server Side Rendering e Static Site Generation, e o **axios** como cliente HTTP para consumir os dados do servidor.

#### Frontend Mobile
No projeto do aplicativo utilizei a ferramenta **expo** para criar meu projeto em **React Native**, novamente utilizando o **axios** como cliente HTTP para consumir os dados do servidor.

<!-- Requerimentos -->
## Requerimentos
Para conseguir rodar o projeto em sua máquina é necessário ter as seguintes ferramentas instaladas
- Node.js
- NPM ou Yarn
- Expo

<!-- Como Executar -->
## Como Executar

#### Clonando o projeto
```sh
# Clonando o projeto para a máquina
git clone https://github.com/Preddo/happy.git
# Vai para a pasta do projeto happy
cd proffy
```
#### Iniciando Backend
```sh
# Vai para a pasta server
cd server
# Instala as dependências
yarn
# Executa o servidor
yarn start
```
#### Iniciando Frontend Web
```sh
# Volta para a pasta proffy
cd ..
# Vai para a pasta web
cd web
# Instala as dependências do frontend web
yarn
# Executa o frontend web
yarn start
```
#### Iniciando Frontend Mobile
```sh
# Volta para a pasta proffy
cd ..
# Vai para a pasta mobile
cd mobile
# Instala as dependências do frontend mobile
yarn
# Executa o frontend mobile
yarn start
```
<!--License session-->
## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).


<img alt="Feito com 🧠 por Pedro Soares" src="./assets/Footer.png">
