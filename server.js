//app modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
//functions
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  const options = {
    dotfiles: "ignore",
    etag: false,
    extensions: ["htm", "html"],
    index: false,
    maxAge: "1d",
    redirect: false,
  };
  app.use(express.static("client/build", options));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  console.log("Build is UP!");
}

dotenv.config();
const PORT = process.env.PORT || 5000;

const main = (async () => {
  app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
})();
