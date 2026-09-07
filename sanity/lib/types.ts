/** Shapes returned by the GROQ queries in ./queries.ts. */

export type SanityImage = {
  asset?: { _ref?: string; _type?: string };
  alt?: string;
  hotspot?: unknown;
  crop?: unknown;
};

export type Taxonomy = { name: string; slug: string };

export type Service = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  icon?: string;
  includes?: string[];
};

export type CaseStudyCard = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  featured?: boolean;
  coverImage?: SanityImage;
  client?: {
    name?: string;
    isOwnProduct?: boolean;
    isAnonymous?: boolean;
    logo?: SanityImage;
  };
  industry?: Taxonomy;
  capabilities?: Taxonomy[];
};
