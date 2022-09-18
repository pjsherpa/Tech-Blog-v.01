// To open a file on the server and return the content to the client.
//installed npm i express

const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const Sequelize = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//accessing msql to connect to the db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`\n Now listenening ${PORT} http://localhost:${PORT}`)
  );
});
