import { groq } from "next-sanity";

const imageFields = `asset, alt, hotspot, crop`;

export const caseStudyCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  summary,
  featured,
  icon,
  coverImage { ${imageFields} },
  client { name, isOwnProduct, isAnonymous, logo { ${imageFields} } },
  "industry": industry->{ name, "slug": slug.current },
  "capabilities": capabilities[]->{ name, "slug": slug.current }
`;

/** Work index. Featured first, then manual order, then newest. */
export const allCaseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(featured desc, order asc, publishedAt desc) {
    ${caseStudyCardFields}
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    ${caseStudyCardFields},
    challenge,
    approach,
    outcomes[] { metric, label },
    stack,
    gallery[] { ${imageFields} },
    testimonial->{ quote, name, role, company },
    seo
  }
`;

export const caseStudySlugsQuery = groq`
  *[_type == "caseStudy" && defined(slug.current)][].slug.current
`;

export const featuredCaseStudiesQuery = groq`
  *[_type == "caseStudy" && featured == true] | order(order asc)[0...3] {
    ${caseStudyCardFields}
  }
`;

export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id, title, "slug": slug.current, summary, icon, includes
  }
`;

export const allArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, category, publishedAt,
    coverImage { ${imageFields} },
    author->{ name, role, photo { ${imageFields} } }
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, excerpt, category, tags, publishedAt, body,
    coverImage { ${imageFields} },
    author->{ name, role, bio, photo { ${imageFields} } },
    seo
  }
`;

export const articleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)][].slug.current
`;

export const leadershipQuery = groq`
  *[_type == "person" && isLeadership == true] | order(order asc) {
    _id, name, role, bio, photo { ${imageFields} }
  }
`;

export const openRolesQuery = groq`
  *[_type == "role" && isOpen == true] | order(dept asc) {
    _id, title, "slug": slug.current, dept, location, type
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName, legalName, tagline, defaultSeo, socials, offices
  }
`;
