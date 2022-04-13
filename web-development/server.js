const fs = require("fs");
const path = require("path");
const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const { fstat } = require("fs");

const app = express();
const port = 8000;

const liveReloadServer = livereload.createServer();

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLiveReload());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("*", async (req, res) => {
  // console.log("HERE");
  const exercises = fs.readdirSync(path.join(__dirname, "public", "exercises"));
  const notes = fs.readdirSync(path.join(__dirname, "public", "notes"));
  res.render("index", { exercises, notes });
  // res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
