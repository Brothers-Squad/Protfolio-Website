var express = require("express");

var app = express();

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`App listening on port: ${port}`);
});

// Serve static files from the 'public' directory
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/landing_page.html");
});
app.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/views/landing_page.html");
});
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about/about.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/views/contact/contact.html");
});
app.get("/privacy_policy", function (req, res) {
  res.sendFile(__dirname + "/views/privacypolicy/privacy_policy.html");
});

var server = app.listen(port, function () {
  console.log("Express App running at http://127.0.0.1:3000/");
});
