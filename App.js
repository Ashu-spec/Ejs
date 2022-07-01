const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get('/', (req, res) => {
  res.send("Hey There");
})

app.listen(3000, () => {
  console.log("App Listening To Port 3000");
});
