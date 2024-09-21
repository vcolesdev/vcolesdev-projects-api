import db from "../index.js";

/**
 * Gets all projects from the database.
 * @function dbFetchAllProjects
 */
export default async function dbFetchAllProjects() {
  const projectsCollection = db.projects;
  const allProjects = await projectsCollection.find().exec();
  console.log("All projects: ", allProjects);
  return allProjects;
}