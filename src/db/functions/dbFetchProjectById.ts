import db from "../index.js";

/**
 * Fetches a project by ID from the database.
 * @function dbFetchProjectById
 * @param projectId
 */
export default async function dbFetchProjectById(projectId: any) {
  const projectsCollection = db.projects;
  const project = await projectsCollection.findOne({
    selector: {
      id: projectId
    }
  }).exec();
  console.log("Project: ", project);
  return project;
}