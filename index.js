const express = require("express");
const app = express();

// EJS
app.set("view engine", "ejs");

// Routes
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/vaga", (req, res) => {
  res.render("vaga");
});

// Port
app.listen(5500, (err) => {
  if (err) {
    console.log("Could not start Jobify server");
  } else console.log("Server start success");
});
