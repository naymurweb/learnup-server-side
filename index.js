const express = require("express");
const app = express();
const port = process.env.PORT || 7000;

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("course API Running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;

  const course = courses.find((data) => data.id == id);
  res.send(course);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "all") {
    res.send(courses);
  }
  const category = courses.filter((data) => data.category === id);
  res.send(category);
});

app.listen(port, () => {
  console.log("course Server running on port", port);
});
