"use strict";

const noteData = require("../db/db.json");
const fs = require("fs");

module.exports = app => {
  app.get("/api/notes", (req, res) => res.json(noteData));

  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);

    fs.writeFile("./db/db.json", JSON.stringify(noteData), err => {
      if (err) throw err;
      console.log("Updated!");
    });
    res.json(true);
  });
  // app.delete("/api/notes", (req, res) => {
  //   res.delete(noteData);
  // });

  // app.post("/api/notes/", (req, res) => {
  //   noteData.length = 0;
  //   res.json({ ok: true });
  // });
};
