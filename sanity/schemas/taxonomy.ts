import { defineType, defineField } from "sanity";

/* Industry and capability are taxonomies, not page types. They exist to tag
   and filter case studies. Keeping them as references rather than free text
   means the filter UI can be added later without a data migration. */

export const industry = defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug", type: "slug",
      options: { source: "name" }, validation: (r) => r.required(),
    }),
  ],
});

export const capability = defineType({
  name: "capability",
  title: "Capability",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug", type: "slug",
      options: { source: "name" }, validation: (r) => r.required(),
    }),
  ],
});
