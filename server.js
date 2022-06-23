import express from "express";

const app = express();
const port = 3033;

app.get("/jobs", (req, res) => {
  res.send([
    {
      name: "job 1",
    },
    {
      name: "job ",
    },
  ]);
});

app.get("*", function (req, res) {
  res.status(404).send(`<h1>404</h1> `);
});

app.listen(port, () => {
  console.log(`Listening an http://localhost:${port}`);
});
