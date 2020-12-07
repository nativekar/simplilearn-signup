const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

let bodyParser = require("body-parser");
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
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
