import blockContent from "./blockContent";
import seo from "./seo";
import caseStudy from "./caseStudy";
import article from "./article";
import service from "./service";
import person from "./person";
import role from "./role";
import testimonial from "./testimonial";
import siteSettings from "./siteSettings";
import { industry, capability } from "./taxonomy";

export const schemaTypes = [
  // objects
  blockContent,
  seo,
  // documents
  caseStudy,
  article,
  service,
  person,
  role,
  testimonial,
  industry,
  capability,
  siteSettings,
];
