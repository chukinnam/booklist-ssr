import express from "express";
import path from "path";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";

import App from "./src/App";

const app = express();

app.use(express.static("./build"));
app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(8080, () => {
  console.log("server start ");
});
