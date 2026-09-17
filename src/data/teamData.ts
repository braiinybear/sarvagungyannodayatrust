export interface Leader {
  name: string;
  role: string;
  bio: string;
  initials: string;
  isFounder?: boolean;
  image?: string;
}

export interface ValueItem {
  name: string;
  desc: string;
  icon: string;
}

export const VALUES: ValueItem[] = [
  { name: "Compassion", desc: "We lead with heart and empathy", icon: "M12 21s-7-4.6-9.2-9A5.4 5.4 0 0 1 12 6.3 5.4 5.4 0 0 1 21.2 12C19 16.4 12 21 12 21z" },
  { name: "Integrity", desc: "We are transparent and honest", icon: "M9 12l2 2 4-4M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z" },
  { name: "Dignity", desc: "We treat every person with respect", icon: "M12 21c-4 0-7-1.5-7-4.5S8 12 12 12s7 1.5 7 4.5S16 21 12 21zM12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
  { name: "Impact", desc: "We focus on lasting results", icon: "M3 17l6-6 4 4 8-8M15 7h6v6" },
];

export const LEADERSHIP: Leader[] = [
  {
    name: "Mr. Rahul Rawat",
    role: "Founder & Settlor",
    bio: "Visionary leader dedicated to empowering underserved communities.",
    initials: "RR",
    isFounder: true,
    image: "/images/rahul-rawat.png"
  },
  {
    name: "[Trustee Name]",
    role: "Managing Trustee",
    bio: "[Brief description of role and contribution]",
    initials: "T"
  },
  {
    name: "[Trustee Name]",
    role: "Trustee",
    bio: "[Brief description of role and contribution]",
    initials: "T"
  }
];

export const FOUNDER_ACHIEVEMENTS = [
  "Reached 50,000+ lives across India",
  "Expanded to 30+ communities",
  "Launched 3 major programs",
  "Built partnerships with leading organizations",
];
