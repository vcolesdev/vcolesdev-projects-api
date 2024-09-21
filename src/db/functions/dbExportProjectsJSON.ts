import dbExportJSON from "../functions/dbExportJSON.js";
import db from "../index.js";

/**
 * Export the projects collection as JSON.
 * @function dbExportProjectsJSON
 */
export default async function dbExportProjectsJSON() {
  const projectsCollection = db.projects;

  projectsCollection.exportJSON()
    .then(json => {
      console.log("Projects collection as JSON: ", json);
      dbExportJSON(json, "src/data/projects-rxdb.json");
    })
    .catch(err => {
      console.error("Error exporting projects collection as JSON: ", err);
    });
}