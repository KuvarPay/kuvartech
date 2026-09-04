import { defineType, defineField } from "sanity";

/** Open roles. In the CMS so they can be opened and closed without a deploy. */
export default defineType({
  name: "role",
  title: "Open role",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug", type: "slug",
      options: { source: "title" }, validation: (r) => r.required(),
    }),
    defineField({ name: "dept", type: "string", title: "Department" }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "type", type: "string",
      options: {
        list: ["Full-time", "Part-time", "Contract"],
        layout: "radio",
      },
      initialValue: "Full-time",
    }),
    defineField({ name: "description", type: "blockContent" }),
    defineField({ name: "isOpen", type: "boolean", title: "Currently open", initialValue: true }),
  ],
  preview: { select: { title: "title", subtitle: "dept" } },
});
