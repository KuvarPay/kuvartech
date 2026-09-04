import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton, pinned to the top and not creatable twice.
            S.listItem()
              .title("Site settings")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.documentTypeListItem("caseStudy").title("Case studies"),
            S.documentTypeListItem("article").title("Articles"),
            S.documentTypeListItem("service").title("Services"),
            S.divider(),
            S.documentTypeListItem("person").title("People"),
            S.documentTypeListItem("role").title("Open roles"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.divider(),
            S.documentTypeListItem("industry").title("Industries"),
            S.documentTypeListItem("capability").title("Capabilities"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
  ],
});
