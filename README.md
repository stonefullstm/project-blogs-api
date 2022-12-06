# Projeto API de Blogs

Aqui você encontrará os detalhes sobre o projeto: como instalar, executar, funcionalidades, recursos e tecnologias utilizadas.

## Introdução

O **API de Blogs** consiste da criação de um banco de dados e CRUD (Create, Read, Update, Delete) para postagens de um blog. A API segue os princípios de REST (Representational State Transfer).

Além do CRUD para as principais tabelas (usuários, categorias e posts), a aplicação oferece queries para buscas nessas mesmas tabelas. A fim de ter acesso às funcionalidades da API, um token é gerado no momento do registro de uma nova pessoa usuária, ou do login.

## Instalação/Execução
### Como instalar
 
Clonar o respositório  
`git clone git@github.com:stonefullstm/project-blogs-api.git`  
 
Entrar no repositório  
`cd project-blogs-api`  
 
Rodar os serviços `node` e `db` (docker) 
`docker-compose up -d` 
 
Acessar o terminal interativo do serviço `node` 
`docker exec -it blogs_api bash` 
 
Instalar as dependências 
`npm install` 
 
### Como executar (criar banco de dados, tabelas e populá-las) 

`npm start` 
 
Utilizar [Thunder client](https://www.thunderclient.com/) ou extensão similar no [Visual Studio](https://code.visualstudio.com/) para acessar os endpoints da API
