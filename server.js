//http://localhost:4000/api/:id
const express = require("express");
const mongoose = require("mongoose");

const route = require("./routes/route");

const URI = "mongodb://127.0.0.1:27017/api";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/api", route);

mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
