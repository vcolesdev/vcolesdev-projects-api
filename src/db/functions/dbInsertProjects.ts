import db from "../index.js";
import {Project} from "../../_types.js";
import fetchProjects from "../../projects/fetchProjects.js";

/**
 * Inserts projects into the database.
 * @function dbInsertProjects
 */
export default async function dbInsertProjects() {
  const projects = fetchProjects();
  const projectsCollection = db.projects;
  const projectsList = await projects;

  // Insert each project into the database and log results
  projectsList.projects.map((project: Project) => {
    projectsCollection.insert(project);
    console.log("Project inserted: ", project.name);
  });
  console.log("Projects inserted", projects);
}