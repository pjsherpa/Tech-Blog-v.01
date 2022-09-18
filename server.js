// To open a file on the server and return the content to the client.
//installed npm i express

const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const Sequelize = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "secret",
  cookie: {},
  resave: false,
  saveUintialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlbars", hbs.engine);
app.set("view engine", "handlebars");
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
