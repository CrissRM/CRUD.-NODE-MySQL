const express = require("express"),
  customer = require("../controllers/customer.controller"),
  routes = express.Router();

routes.get("/", customer.getAll);
routes.post("/add", customer.save);
routes.get("/delete/:id", customer.delete);
routes.get("/edit/:id", customer.edit);
routes.post("/update/:id", customer.saveEdit);
module.exports = routes;
