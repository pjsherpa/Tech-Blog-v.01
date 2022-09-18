// To open a file on the server and return the content to the client.
//installed npm i express

const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//accessing msql to connect to the db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server started on port${PORT}`));
});
