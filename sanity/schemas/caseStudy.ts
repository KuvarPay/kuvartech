import { defineType, defineField } from "sanity";

/** The hero content type. Everything else on the site points at these. */
export default defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  groups: [
    { name: "overview", title: "Overview", default: true },
    { name: "story", title: "The story" },
    { name: "meta", title: "Tagging & SEO" },
  ],
  fields: [
    defineField({ name: "title", type: "string", group: "overview", validation: (r) => r.required() }),
    defineField({
      name: "slug", type: "slug", group: "overview",
      options: { source: "title" }, validation: (r) => r.required(),
    }),
    defineField({
      name: "client", type: "object", group: "overview",
      fields: [
        { name: "name", type: "string", title: "Client name" },
        { name: "logo", type: "image", title: "Client logo" },
        {
          name: "isOwnProduct", type: "boolean", title: "One of our own products",
          description: "KuvarPay, KuvarSend and similar. Labelled differently to client work.",
          initialValue: false,
        },
        {
          name: "isAnonymous", type: "boolean", title: "Keep this client anonymous",
          description: "Unused at launch - all four clients can be named. Kept so an anonymous client needs no migration.",
          initialValue: false,
        },
      ],
    }),
    defineField({
      name: "summary", type: "text", rows: 3, group: "overview",
      description: "One or two sentences. Used on the Work index card.",
      validation: (r) => r.required().max(240),
    }),
    defineField({ name: "coverImage", type: "image", group: "overview", options: { hotspot: true } }),
    defineField({
      name: "featured", type: "boolean", group: "overview",
      description: "Surfaces on the homepage.", initialValue: false,
    }),

    defineField({ name: "challenge", type: "blockContent", group: "story", title: "The challenge" }),
    defineField({ name: "approach", type: "blockContent", group: "story", title: "What we did" }),
    defineField({
      name: "outcomes", type: "array", group: "story", title: "Outcomes",
      description: "Rendered as the stat grid. Two to four reads best.",
      of: [{
        type: "object",
        fields: [
          { name: "metric", type: "string", title: "Figure", description: "e.g. 42s, 99.98%, 5M+" },
          { name: "label", type: "string", title: "What it measures" },
        ],
        preview: { select: { title: "metric", subtitle: "label" } },
      }],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: "stack", type: "array", group: "story", title: "Technology used",
      of: [{ type: "string" }], options: { layout: "tags" },
    }),
    defineField({
      name: "gallery", type: "array", group: "story",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({ name: "testimonial", type: "reference", group: "story", to: [{ type: "testimonial" }] }),

    defineField({ name: "industry", type: "reference", group: "meta", to: [{ type: "industry" }] }),
    defineField({
      name: "capabilities", type: "array", group: "meta",
      of: [{ type: "reference", to: [{ type: "capability" }] }],
    }),
    defineField({ name: "publishedAt", type: "datetime", group: "meta", initialValue: () => new Date().toISOString() }),
    defineField({ name: "order", type: "number", group: "meta", title: "Sort order" }),
    defineField({ name: "seo", type: "seo", group: "meta" }),
  ],
  preview: {
    select: { title: "title", subtitle: "client.name", media: "coverImage" },
  },
});
