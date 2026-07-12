export type ProjectCategory = "td" | "ux";

export interface Project {
  id: string;
  category: ProjectCategory;
  badge: "TEARDOWN" | "CASE STUDY";
  gradient: [string, string];
  emoji: string;
  title: string;
  description: string;
  keyInsight: string;
  tags: string[];
  link: string;
  actionLabel: string;
}

/**
 * ADD A NEW PROJECT
 * Copy the object shape below, fill it in, and add it to the array.
 * That's it — no other file needs to change.
 *
 * {
 *   id: "unique-slug",
 *   category: "td" | "ux",
 *   badge: "TEARDOWN" | "CASE STUDY",
 *   gradient: ["#fromColor", "#toColor"],
 *   emoji: "🔍",
 *   title: "Project title",
 *   description: "1-3 sentence summary of the project.",
 *   keyInsight: "The single most important takeaway.",
 *   tags: ["Tag One", "Tag Two"],
 *   link: "https://...",
 *   actionLabel: "View Full Teardown →",
 * }
 */
export const projects: Project[] = [
  {
    id: "uber-surge-pricing-teardown",
    category: "td",
    badge: "TEARDOWN",
    gradient: ["#ffecd2", "#ffd6e0"],
    emoji: "🔍",
    title: "Uber: Surge Pricing Breaks Trust",
    description:
      "How unclear pricing at confirmation creates doubt and drop-offs — with a 3-feature solution framework.",
    keyInsight:
      "Users don't reject high prices. They reject prices they don't understand.",
    tags: ["Product Strategy", "User Research", "Pricing"],
    link: "https://drive.google.com/file/d/125YyO3mPw-WgB22BNJqh-lnJHkOho2xY/view?usp=drivesdk",
    actionLabel: "View Full Teardown →",
  },
  {
    id: "make-com-onboarding-teardown",
    category: "td",
    badge: "TEARDOWN",
    gradient: ["#ffd6e0", "#e0d4f5"],
    emoji: "🎯",
    title: "Make.com: Unlocking First Value",
    description:
      "Make wins on power, loses on onboarding. A phased strategy to fix Time-to-First-Value.",
    keyInsight:
      "Users fail not because the product is weak — but because the path to value is unclear.",
    tags: ["Onboarding", "Activation", "Growth"],
    link: "https://drive.google.com/file/d/1lLha7Q7dhQqw-2HJCztUIVFSLNL3HOXm/view?usp=drivesdk",
    actionLabel: "View Full Teardown →",
  },
  {
    id: "instagram-reels-ux-case-study",
    category: "ux",
    badge: "CASE STUDY",
    gradient: ["#d4f0c4", "#c4e8ff"],
    emoji: "📱",
    title: "Instagram Reels: Impossible to Leave",
    description:
      "A cinematic deep-dive into infinite scroll psychology, variable rewards, and attention mechanics.",
    keyInsight:
      "The strongest products don't just capture attention. They earn it.",
    tags: ["Behavioral Design", "Systems Thinking", "UX"],
    link: "https://instagram-reels-ux-cs.lovable.app/",
    actionLabel: "View Live Experience →",
  },
];
