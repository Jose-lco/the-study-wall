var express = require("express");
var session = require("express-session");
const path = require("path");
// Requiring passport as we've configured it
var passport = require("./config/passport");
// Sets up the Express App
var PORT = process.env.PORT || 3001;
var app = express();
// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(session({ 
  secret: "keyboard cat", 
  resave: true, 
  saveUninitialized: true 
}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/posts.js")(app);
require("./routes/userdata.js")(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
