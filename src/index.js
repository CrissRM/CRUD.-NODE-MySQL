require("dot-env").config();
const app = require("./app");

const main = async () => {
  app.listen(app.get("port"));
  console.log(`Servidor coriendo en el puerto ${app.get("port")}`);
};

main();
