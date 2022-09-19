// To open a file on the server and return the content to the client.
//installed npm i express

const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//accessing msql to connect to the db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`\n Now listenening ${PORT} http://localhost:${PORT}`)
  );
});
