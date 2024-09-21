import express from "express";
import projectsJSON from "../data/projects.json";
import dbFetchAllProjects from "../db/functions/dbFetchAllProjects.js";

const projectsRouter = express.Router();

// Get all projects from local JSON file
projectsRouter.get("/projects", (req, res) => {
  return res.json(projectsJSON);
});

// Get all projects from our rxdb database
projectsRouter.get("/rxdb/projects", async (req, res) => {
  const projects = await dbFetchAllProjects();
  return res.json(projects);
});

export default projectsRouter;