const express = require("express");
const app = new express();

app.get("/", () => {});

app.listen("3000", () => console.log("listening on port 3000"));
