// Dependencies ==========================
const express = require("express");
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const methodO = require('method-override');
// =======================================

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodO('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});