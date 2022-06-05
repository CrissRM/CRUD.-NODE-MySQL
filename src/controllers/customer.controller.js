customer = {};

customer.getAll = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer", (err, customer) => {
      if (err) return res.json(err);
      res.render("pages/customer", {
        customer,
      });
    });
  });
};

customer.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.json(err);
    conn.query("INSERT INTO customer SET ?", [data], (err, customer) => {
      if (err) return res.json(err);
      console.log(customer);
      res.redirect("/");
    });
  });
};

customer.delete = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, conn) => {
    if (err) return res.json(err);
    conn.query("DELETE FROM customer WHERE id=?", [id], (err, customer) => {
      if (err) return res.json(err);
      res.redirect("/");
    });
  });
};

customer.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    if (err) return res.json(err);
    conn.query("SELECT * FROM customer WHERE id=?", [id], (err, customer) => {
      if (err) return res.json(err);
      res.render("pages/editForm", { customer });
    });
  });
};

customer.saveEdit = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.json(err);
    conn.query(
      "UPDATE customer SET ? WHERE id=?",
      [data, id],
      (err, customer) => {
        if (err) return res.json(err);
        res.redirect("/");
      }
    );
  });
};
module.exports = customer;
