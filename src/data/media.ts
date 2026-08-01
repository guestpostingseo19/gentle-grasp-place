import aboutImg from "@/assets/about.jpg";
import advertiseImg from "@/assets/advertise.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";
import blog7 from "@/assets/blog-7.jpg";
import blog8 from "@/assets/blog-8.jpg";
import blog9 from "@/assets/blog-9.jpg";
import blogImg from "@/assets/blog.jpg";
import contactImg from "@/assets/contact.jpg";
import svcBloggerOutreach from "@/assets/svc-blogger-outreach.jpg";
import svcDigitalPr from "@/assets/svc-digital-pr.jpg";
import svcGuestPosting from "@/assets/svc-guest-posting.jpg";
import svcLinkBuilding from "@/assets/svc-link-building.jpg";
import svcNicheEdits from "@/assets/svc-niche-edits.jpg";
import svcSeoContentWriting from "@/assets/svc-seo-content-writing.jpg";

export const pageImages = {
  about: aboutImg,
  advertise: advertiseImg,
  contact: contactImg,
  blog: blogImg,
};

type Media = { src: string; alt: string };

export const serviceMedia: Record<string, Media> = {
  "guest-posting": {
    src: svcGuestPosting,
    alt: "Glowing editorial pages floating above a dark surface, representing guest post placements",
  },
  "link-building": {
    src: svcLinkBuilding,
    alt: "Network of illuminated nodes connected by links, representing a link building campaign",
  },
  "niche-edits": {
    src: svcNicheEdits,
    alt: "A glowing line highlighted inside a paragraph of text, representing a link insertion",
  },
  "blogger-outreach": {
    src: svcBloggerOutreach,
    alt: "Floating glass envelopes representing personalised blogger outreach emails",
  },
  "digital-pr": {
    src: svcDigitalPr,
    alt: "A luminous data wave radiating outward, representing digital PR reach",
  },
  "seo-content-writing": {
    src: svcSeoContentWriting,
    alt: "An elegant light stroke across a sheet of paper, representing SEO content writing",
  },
};

export const postMedia: Record<string, Media> = {
  "what-makes-a-guest-post-worth-publishing": {
    src: blog1,
    alt: "A glowing approval mark above folded paper shapes",
  },
  "how-to-evaluate-a-link-opportunity": {
    src: blog2,
    alt: "A luminous lens inspecting a grid of link prospects",
  },
  "anchor-text-distribution-explained": {
    src: blog3,
    alt: "Glowing bars showing an anchor text distribution curve",
  },
  "niche-edits-vs-guest-posts": {
    src: blog4,
    alt: "Two glowing paths diverging, comparing niche edits and guest posts",
  },
  "measuring-link-building-roi": {
    src: blog5,
    alt: "An upward glowing performance curve on a dark grid",
  },
  "building-a-publisher-relationship": {
    src: blog6,
    alt: "Two glowing spheres joined by an arc of light, representing publisher relationships",
  },
  "guest-post-outreach-emails-that-get-replies": {
    src: blog7,
    alt: "A glowing envelope outline representing guest post outreach emails",
  },
  "saas-link-building-strategy": {
    src: blog8,
    alt: "Isometric glowing cubes representing a SaaS link building stack",
  },
  "link-building-pricing-explained": {
    src: blog9,
    alt: "Three glowing columns of increasing height representing link building pricing tiers",
  },
};

const fallback: Media = { src: blogImg, alt: "RankBridge editorial artwork" };

export const getServiceMedia = (slug: string): Media => serviceMedia[slug] ?? fallback;
export const getPostMedia = (slug: string): Media => postMedia[slug] ?? fallback;
