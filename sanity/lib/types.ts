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

export type PortableTextBlock = {
  _type: string;
  _key?: string;
  style?: string;
  markDefs?: unknown[];
  children?: { _type: string; _key?: string; text: string; marks?: string[] }[];
};

export type Outcome = { metric: string; label: string };

export type CaseStudy = CaseStudyCard & {
  /** Icon key used when no coverImage is set — seed content has no images yet. */
  icon?: string;
  challenge?: PortableTextBlock[];
  approach?: PortableTextBlock[];
  outcomes?: Outcome[];
  stack?: string[];
  testimonial?: { quote: string; name?: string; role?: string; company?: string } | null;
};

export type Person = {
  _id: string;
  name: string;
  role?: string;
  bio?: string;
  photo?: SanityImage;
  isLeadership?: boolean;
  order?: number;
};

export type Role = {
  _id: string;
  title: string;
  slug?: string;
  dept?: string;
  location?: string;
  type?: string;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  coverImage?: SanityImage;
  author?: { name: string; role?: string; bio?: string; photo?: SanityImage };
  body?: PortableTextBlock[];
  tags?: string[];
};
