import { defineType, defineField } from "sanity";

/** Reusable SEO overrides. Every field is optional - sensible defaults are
 *  derived from the document when these are blank. */
export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "title", type: "string", title: "Meta title",
      description: "Defaults to the document title.",
      validation: (r) => r.max(60).warning("Titles over 60 characters get truncated."),
    }),
    defineField({
      name: "description", type: "text", rows: 2, title: "Meta description",
      validation: (r) => r.max(160).warning("Descriptions over 160 characters get truncated."),
    }),
    defineField({ name: "image", type: "image", title: "Social share image" }),
    defineField({ name: "noIndex", type: "boolean", title: "Hide from search engines", initialValue: false }),
  ],
});
