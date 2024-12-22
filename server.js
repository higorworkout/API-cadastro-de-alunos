import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`listening on ${port}`);
  console.log(`CTRL + Clique http://localhost:${port}`);
});


/*
  Para criação de seeds utilize o comando abaixo:

  npx sequelize seed:generate --name create_users
*/


