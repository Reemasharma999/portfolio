export type ProjectType = "case-study" | "teardown";

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  subtitle: string;
  description: string;
  keyInsight: string;
  tags: string[];
  link: string;
  linkLabel: string;
}

/**
 * ADD A NEW PROJECT
 * Copy the object shape below, fill it in, and add it to the array.
 * That's it — no other file needs to change. See README.md for details.
 *
 * {
 *   id: "unique-slug",
 *   type: "case-study" | "teardown",
 *   title: "Project title",
 *   subtitle: "Short subtitle shown under the title",
 *   description: "1-3 sentence summary of the project.",
 *   keyInsight: "The single most important takeaway, shown as a quote.",
 *   tags: ["Tag One", "Tag Two"],
 *   link: "https://...",
 *   linkLabel: "Button text, e.g. 'View Case Study'",
 * }
 */
export const projects: Project[] = [
  {
    id: "instagram-reels-ux-case-study",
    type: "case-study",
    title: "Why Instagram Reels Feel Impossible to Leave",
    subtitle: "A cinematic Product Systems UX Case Study",
    description:
      "A deep dive into infinite scroll psychology, variable rewards, algorithmic precision, session awareness, and the attention mechanics behind modern social products.",
    keyInsight:
      "The strongest products don't just capture attention. They earn it.",
    tags: ["Behavioral Design", "Systems Thinking", "UX Research", "Engagement"],
    link: "https://instagram-reels-ux-cs.lovable.app/",
    linkLabel: "View Live Experience",
  },
  {
    id: "uber-surge-pricing-teardown",
    type: "teardown",
    title: "Uber: Surge Pricing Breaks Trust",
    subtitle: "Product Teardown — Pricing Strategy & Trust",
    description:
      "How unclear pricing at the confirmation screen creates doubt, hesitation, and drop-offs. Includes user research from 3.8K+ Reddit mentions, 3 personas, competitive analysis (Uber vs Ola vs Rapido), and a 3-feature solution framework.",
    keyInsight:
      "Users don't reject high prices. They reject prices they don't understand.",
    tags: ["Product Strategy", "User Research", "Pricing", "Competitive Analysis"],
    link: "https://drive.google.com/file/d/125YyO3mPw-WgB22BNJqh-lnJHkOho2xY/view?usp=drivesdk",
    linkLabel: "View Full Teardown",
  },
  {
    id: "make-com-onboarding-teardown",
    type: "teardown",
    title: "Make.com: Unlocking First Value",
    subtitle: "Product Teardown — Onboarding & Activation",
    description:
      "Make.com wins on power but loses on onboarding. A deep-dive into activation friction, the onboarding journey, market positioning (Zapier vs n8n vs Make), and a phased strategy to fix Time-to-First-Value.",
    keyInsight:
      "Users don't fail because the product is weak — they fail because the path to value is unclear.",
    tags: ["Onboarding", "Activation", "Growth Strategy", "Competitive Analysis"],
    link: "https://drive.google.com/file/d/1lLha7Q7dhQqw-2HJCztUIVFSLNL3HOXm/view?usp=drivesdk",
    linkLabel: "View Full Teardown",
  },
];
