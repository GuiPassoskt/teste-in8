# Adonis API application

Para começarmos o desenvolvimento da nossa aplicação, vamos instalar o CLI (Command Line Interface) do Adonis que vai nos ajudar muito durante o desenvolvimento:

```code
npm i -g @adonisjs/cli
```

1 - Criar um banco de dados e editar as credenciais no arquivo .env

2 - Instalando os pacotes npm:

```code
npm install

ou 

yarn

```

3 - Rodar o comando para criar as tabelas

```code
adonis migration:run
```

4 - Iniciar a aplicação:


```code
adonis serve

ou

npm run start
```

5 - Rotas da aplicação:

| Route               | Verb(s)   | Handler                   | Middleware | Name            | Domain |
|---------------------|-----------|---------------------------|------------|-----------------|--------|
| /                   | HEAD,GET  | Closure                   |            | /               |        |
| /api/v1/livros      | HEAD,GET  | LivroController.index     |            | livros.index    |        |
| /api/v1/livros      | POST      | LivroController.store     |            | livros.store    |        |
| /api/v1/livros/:id  | HEAD,GET  | LivroController.show      |            | livros.show     |        |
| /api/v1/livros/:id  | PUT,PATCH | LivroController.update    |            | livros.update   |        |
| /api/v1/livros/:id  | DELETE    | LivroController.destroy   |            | livros.destroy  |        |
| /api/v1/alunos      | HEAD,GET  | AlunoController.index     |            | alunos.index    |        |
| /api/v1/alunos      | POST      | AlunoController.store     |            | alunos.store    |        |
| /api/v1/alunos/:id  | HEAD,GET  | AlunoController.show      |            | alunos.show     |        |
| /api/v1/alunos/:id  | PUT,PATCH | AlunoController.update    |            | alunos.update   |        |
| /api/v1/alunos/:id  | DELETE    | AlunoController.destroy   |            | alunos.destroy  |        |
| /api/v1/reserva     | HEAD,GET  | ReservaController.index   |            | reserva.index   |        |
| /api/v1/reserva     | POST      | ReservaController.store   |            | reserva.store   |        |
| /api/v1/reserva/:id | HEAD,GET  | ReservaController.show    |            | reserva.show    |        |
| /api/v1/reserva/:id | PUT,PATCH | ReservaController.update  |            | reserva.update  |        |
| /api/v1/reserva/:id | DELETE    | ReservaController.destroy |            | reserva.destroy |        |