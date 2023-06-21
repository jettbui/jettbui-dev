import { type SchemaTypeDefinition } from "sanity";

import headerContent from "./schemas/headerContent";
import experience from "./schemas/experience";
import project from "./schemas/project";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [headerContent, experience, project],
};
