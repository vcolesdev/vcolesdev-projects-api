import db from "./index.js";
import ProjectSchema from "./projectSchema.js";
import dbInsertProjects from "./functions/dbInsertProjects.js";
import dbFetchAllProjects from "./functions/dbFetchAllProjects.js";
import dbExportProjectsJSON from "./functions/dbExportProjectsJSON.js";
import "./plugins/index.js";

export default async function initDb() {
  // Add our projects collection
  await db.addCollections({
    projects: {
      schema: ProjectSchema
    }
  });

  // Insert projects
  await dbInsertProjects();
  await dbFetchAllProjects();

  const projectsCollection = db.projects;

  // Subscribe to changes
  projectsCollection.$.subscribe(projects => {
    console.log("Projects collection changed: ", projects);
  });

  // Export the projects collection as JSON.
  await dbExportProjectsJSON();
}

