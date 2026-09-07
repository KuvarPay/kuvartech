import { defineType, defineField } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug", type: "slug",
      options: { source: "title" }, validation: (r) => r.required(),
    }),
    defineField({ name: "author", type: "reference", to: [{ type: "person" }] }),
    defineField({
      name: "category", type: "string",
      options: {
        list: [
          { title: "Engineering", value: "engineering" },
          { title: "Industry", value: "industry" },
          { title: "Company news", value: "news" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({
      name: "excerpt", type: "text", rows: 3,
      description: "Shown on the Insights index and in search results.",
      validation: (r) => r.required().max(240),
    }),
    defineField({ name: "coverPath", type: "string", readOnly: true, description: "Generated cover in /public." }),
    defineField({ name: "coverImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", type: "blockContent" }),
    defineField({ name: "publishedAt", type: "datetime", initialValue: () => new Date().toISOString(), validation: (r) => r.required() }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "seo", type: "seo" }),
  ],
  orderings: [
    { title: "Newest first", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
