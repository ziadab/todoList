const mongoose = require("mongoose");
const express = require("express");
const todoRoute = require("./routes/todos");
const app = express();
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://ziad:error405@learnmongoose-wpdg1.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Connected to MonguuuuuwU");
  })
  .catch(err => {
    console.log("Ay ya yaa sadly nop I couldn't");
  });

app.use(cors());
app.use(express.json());
app.use("/", todoRoute);

app.listen(5000, () => {
  console.log("YAHIIII");
});
