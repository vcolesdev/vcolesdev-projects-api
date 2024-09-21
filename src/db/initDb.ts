import db from "./index.js";
import ProjectSchema from "./projectSchema.js";
import dbInsertProjects from "./functions/dbInsertProjects.js";
import dbFetchAllProjects from "./functions/dbFetchAllProjects.js";
import "./plugins/enableDevMode.js";

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
}

