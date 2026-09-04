import { defineType, defineField } from "sanity";

/** Serves two jobs: the About team grid and article bylines. One record per
 *  human, so a new hire is added once. */
export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", title: "Job title" }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", type: "text", rows: 3 }),
    defineField({
      name: "socials", type: "array", title: "Social links",
      of: [{
        type: "object",
        fields: [
          { name: "platform", type: "string" },
          { name: "url", type: "url" },
        ],
      }],
    }),
    defineField({
      name: "isLeadership", type: "boolean", title: "Show on the About page",
      initialValue: false,
    }),
    defineField({ name: "order", type: "number", title: "Sort order" }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});
