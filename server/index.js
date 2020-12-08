const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

let bodyParser = require("body-parser");
const e = require("express");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const user = {};

app.use(cors());

app.use(express.json());

app.use(express.urlencoded());

app.post("/signup", (req, res) => {
  user.username = req.body.username;
  user.password = req.body.password;

  console.log("user", user);

  res.json({ message: "User registered" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log(user);

  if (user.username === username && user.password === password) {
    res.json({ message: "Login successful" });
  } else {
    res.send({ error: true, message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
