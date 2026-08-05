"use strict";

const express = require("express");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
ap.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(POST, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
