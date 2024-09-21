import db from "../index.js";

/**
 * Fetches a project by name from the database.
 * @function dbFetchProjectBySlug
 * @param slug
 */
export default async function dbFetchProjectBySlug(slug: string) {
  const projectsCollection = db.projects;
  const project = await projectsCollection.findOne({
    selector: {
      slug: slug
    }
  }).exec();
  console.log("Project: ", project);
  return project;
}