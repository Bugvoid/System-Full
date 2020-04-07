const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
mongoose.set("useFindAndModify", false);

const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

mongoose.connect(
  "mongodb+srv://root:root@cluster0-huzkm.mongodb.net/aircnc?retryWrites=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(3333);
