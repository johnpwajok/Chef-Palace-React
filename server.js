const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const config = require("config");

const app = express();

//BodyParser middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");
// Connect to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database!\n"))
  .catch((err) => console.log(err));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

//Static file declaration
// app.use(express.static(path.join(__dirname, "client/build")));
//port conn on heroku
const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server started on Port ${port}`));
//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build"))); //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
  //build mode
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });
  //start
  app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
  });
} else {
  app.listen(port, () => console.log(`Server started on Port ${port}`));
}
