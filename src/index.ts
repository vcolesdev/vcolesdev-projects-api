import express from "express";
import initDb from "./db/initDb.js";
import projectsRouter from "./projects/routes.js";

export const app = express();

app.use(express.json());
app.use(projectsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Projects API! Use /projects to get a list of projects.");
});

app.listen(8080, () => {
  console.log("Projects server is running on port 8000");

  initDb()
    .then(() => {
      console.log("Database initialized");
    })
    .catch((err: any) => {
      console.error("Error initializing database: ", err);
    });
});