"use strict";

const noteData = require("../db/db.json");

module.exports = app => {
  app.get("/api/notes", (req, res) => res.json(noteData));

  app.post("/api/notes", (req, res) => {
    if (noteData.length) {
      noteData.push(req.body);
      res.json(true);
    }
  });
};
