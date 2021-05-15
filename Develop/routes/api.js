const express = require("express");
const app = express();
const fs = require("fs");
const notes = require("../database/db.json");
const uuid = require("uuid");
const cors = require("cors");
app.use(cors());

app.get("/api/note", (req, res) => res.json(notes));

app.post("/api/note", (req, res) => {
  const newNote = req.body;
  newNote.id = uuid();
  notes.push(newNote);
  fs.writeFile(
    __dirname + "/../database/db.json",
    JSON.stringify(notes),
    function (error) {
      if (error) throw error;
    }
  );
  res.end();
});

app.delete(`/api/note/:id`, (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (note.id === id) {
      notes.splice(i, 1);
    }
  }
  fs.writeFile(
    __dirname + "/../database/db.json",
    JSON.stringify(notes),
    function (error) {
      if (error) throw error;
    }
  );
  res.end();
});

module.exports = app;
