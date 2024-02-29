var express = require("express");

var app = express();

const port = process.env.PORT || 3000;

app.listen(port, "127.1.1.1", () => {
  console.log(`App listening on port: ${port}`);
});

// Serve static files from the 'public' directory
app.use(express.static(__dirname + "/bin/public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bin/views/landing_page.html");
});
app.get("/dashboard", function (req, res) {
  res.sendFile(__dirname + "/bin/views/landing_page.html");
});
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/bin/views/about/about.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/bin/views/contact/contact.html");
});
app.get("/privacy_policy", function (req, res) {
  res.sendFile(__dirname + "/bin/views/privacypolicy/privacy_policy.html");
});

var server = app.listen(port, function () {
  console.log("Express App running at http://127.0.0.1:3000/");
});
