const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./database");

const app = express();
app.use(bodyParser.json());

//Sync database
sequelize.sync();

//Routers
app.use("/", require("./routes/index"));

// Define your CRUD routes here

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
