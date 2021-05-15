const path = require("path");
const express = require("express");
const app = express();

app.get("/note", (req, res) =>
  res.sendFile(path.join(__dirname, "../frontend/note.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../frontend/index.html"))
);

module.exports = app;
