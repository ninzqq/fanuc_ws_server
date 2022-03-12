const express = require("express");
<<<<<<< HEAD
=======
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const axios = require("axios");
const { join } = require("path");

const PORT = process.env.PORT || 3000;

>>>>>>> parent of 33d78eb (Add cors origin: "*")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/three/build"));
app.use(express.static("node_modules/three/examples/jsm/controls"));
app.use(express.static("node_modules/three/examples/jsm/loaders"));


app.listen(PORT);
console.log("Listening port: " + PORT);