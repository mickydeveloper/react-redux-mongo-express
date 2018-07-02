const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./database.config.js");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my rest api, see the documentation on http://localhost:4000/api-docs" });
});

require('./routes/todo.routes.js')(app);
app.listen(4000, () => {
  console.log("Api server is running on port 4000 to see docs http://localhost:4000/api-docs");
});

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() => {
    console.log("Successfuly connected to database");
}).catch( err => {
    console.log("Faild to connect to database, Exiting...");
    process.exit();
});
