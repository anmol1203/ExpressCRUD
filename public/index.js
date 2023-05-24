const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

// use = koi bhi crud ka use fark nahi padhta sbse pehle middleware ko cahalaega.
app.use(middleware);

// CREATE
app.post(
  "/",
  /*middleware , */ (req, res) => {
    res.send("POST REQUEST");
  }
);

//  READ
app.get("/", (req, res) => {
  res.send("GET REQUEST");
});

// UPDATE
app.put("/", (req, res) => {
  res.send("PUT REQUEST");
});

// DELETE
app.delete("/", (req, res) => {
  res.send("DELETE REQUEST");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`server is running at ${PORT}`));
