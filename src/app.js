const express = require("express"),
  path = require("path"),
  morgan = require("morgan"),
  mysql = require("mysql"),
  myConnection = require("express-myconnection"),
  routesCostumer = require("./routes/customer.routes"),
  config = require("./config"),
  app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: config.MySQL.user,
      password: config.MySQL.password,
      port: 3306,
      database: "crud_nodejs_mysql",
    },
    "single"
  )
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routesCostumer);

module.exports = app;
