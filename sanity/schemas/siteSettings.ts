import { defineType, defineField } from "sanity";

/** Singleton. Values used across every page. */
export default defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", type: "string", initialValue: "KuvarTech" }),
    defineField({
      name: "legalName", type: "string", title: "Legal name",
      description: "Used in the footer copyright and legal pages.",
      initialValue: "KuvarTechnology",
    }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "defaultSeo", type: "seo" }),
    defineField({
      name: "socials", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "platform", type: "string" },
          { name: "url", type: "url" },
        ],
      }],
    }),
    defineField({
      name: "offices", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "badge", type: "string" },
          { name: "city", type: "string" },
          { name: "lines", type: "array", of: [{ type: "string" }] },
        ],
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
