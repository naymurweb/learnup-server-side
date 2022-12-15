const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const course = require("./data/data.json");

app.get("/", (req, res) => {
  res.send("course api run");
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectCourse = course.find((c) => c.id == id);
  res.send(selectCourse);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const selectCategories = course.filter((item) => item.categories == id);
  res.send(selectCategories);
});

app.listen(port, () => {
  console.log("course server on port", port);
});
