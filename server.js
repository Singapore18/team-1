
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
app = express();
const apiRouter = require("./endpoints/api");
app.use("/endpoints", apiRouter);
/*
// apply first time database migrations
require("./migrate").runMigrations();



// for the Access-Control-Allow-Origin
// so that the browser can call the server's apis
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Api endpoints
app.use("/api", apiRouter);
app.get("/po/download/:id", poHandler.download);

if (process.env.NODE_ENV == "production") {
  // Point static path to dist
  app.use(express.static(path.join(__dirname, "dist/fyp-hook-coffee")));

  // Catch all other routes and return the index file
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/fyp-hook-coffee/index.html"));
  });
}
*/

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
