const URL = "http://localhost:8080/projects"

/**
 * Fetches projects from the server.
 * @function fetchProjects
 */
export default async function fetchProjects() {
  const response = await fetch(URL);
  const projects = await response.json();
  console.log(projects);
  return projects;
}