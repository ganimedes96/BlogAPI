<h1 align="center">
   
   Blog API
</h1>

<h2 >
	
	About the project
	
</h2>

<p>Api Restful de cadastro de posts, atraves dessa api e possivel cadastra , atualizar e excluir post, categoria e usuario. A conexão com o banco de dados foi feita com o ORM Sequelize e a autenticação com Json Web Token. </p>

## 🚀 Technologies

Technologies that I used to develop this web client

- [NodeJs](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org)
- [JWT](https://jwt.io)
- [Eslint](https://eslint.org/)
- [Express](https://expressjs.com)
- [Docker](https://expressjs.com)
- [MySQL](https://www.mysql.com)


<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  ![sequelize test](./public/remote-container.png)

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>

# 💻 Getting started

### Requirements

**Clone the project and access the folder**

```bash
$ git clone https://github.com/ganimedes96/BlogAPI && cd BlogAPI
```

**Follow the steps below to install the required dependencies**

```bash
# Install the dependencies
$ npm install

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ npm run debug
# O servidor inciará na porta:3333 - acesse http://localhost:3000 

```



**follow the steps below to clone the repository on your machine**

```bash
# Clone your fork
$ git clone your-fork-url && cd BlogAPI

# Create a branch with your feature
$ git checkout -b feature

# Make the commit with your changes
$ git commit -m 'First Commit'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

---
<div align="center">
	<h2>Made with 💜 &nbsp;by Hudson Felix 👋<a href="https://www.linkedin.com/in/hudson-felix-577305215/">See my Linkedin</a></h2>
</div>

