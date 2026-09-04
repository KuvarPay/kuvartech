import { defineType, defineField } from "sanity";

/** The six capabilities. Deliberately technology-agnostic - no service is
 *  named after a tool. */
export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug", type: "slug",
      options: { source: "title" }, validation: (r) => r.required(),
    }),
    defineField({
      name: "summary", type: "text", rows: 3,
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "icon", type: "string",
      description: "Key from components/Icons.tsx.",
    }),
    defineField({
      name: "includes", type: "array", title: "What this covers",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "relatedCaseStudies", type: "array",
      of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
    }),
    defineField({ name: "order", type: "number", title: "Sort order" }),
  ],
  orderings: [{ title: "Manual order", name: "manual", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "summary" } },
});
