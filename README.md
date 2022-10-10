# Trybesmith!

Projeto destinado a gerência de um banco de dados de produtos artesanais e suas vendas.

# Orientações

Há duas opções: Rodando no Docker OU rodando localmente.
  
  ## Docker 
  
  1 - Configure o seu arquivo .env;
  2 - Rode o comando:

  ```
  docker-compose up -d
  ```
  Irá rodar os containers com a nossa aplicação e o nosso banco de dados em background.

  3 - Execute o comando para acessar o banco de dados: 

  ```
  docker exec -it trybesmith_db bash
  ```
  Ele irá abrir o terminal do container onde nosso banco de dados está sendo rodado. 

  4 - Popule o banco de dados com o comando:

  ```
  npm run restore
  ```

  Ao final da execução da população do banco de dados, saia do terminal:

  ```
  exit
  ```

  5 - Execute o comando: 

  ```
  docker exec -it trybesmith bash
  ```
  Irá executar o terminal do container da aplicação. Será nesse terminal que você irá rodar todos os comandos de acesso a API. 

  6 - Instale todas as dependências. 

  ```
  npm instal 
  ```

  7 - Rode o servidor: 

  ```
  npm start
  ```

  ## Localmente

  1 - Configure o arquivo .env.
  
  2 - Instale todas as dependências:

  ```
  npm instal
  ```

  3 - Rode o servidor: 

  ```
  npm start
  ```

____________________________________________________________________________________
Projeto desenvolvido por asafworld, em 2022 no curso de Desenvolvimento Web da Trybe