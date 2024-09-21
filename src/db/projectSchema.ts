import {RxJsonSchema} from "rxdb";

type ProjectDocumentType = {
  id: string;
  description: string;
  link: string;
  name: string;
  slug: string;
  tags: string[];
}

const ProjectSchema = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 24
    },
    description: {
      type: "string"
    },
    link: {
      type: "string"
    },
    name: {
      type: "string"
    },
    slug: {
      type: "string"
    },
    tags: {
      type: "array",
      items: {
        type: "string"
      }
    }
  },
  required: ["id", "description", "link", "name", "slug"]
}

export default ProjectSchema as RxJsonSchema<ProjectDocumentType>;