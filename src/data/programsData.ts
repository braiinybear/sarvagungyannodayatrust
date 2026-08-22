export interface Program {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  image: string;
  imageAlt: string;
  href: string;
  raised: number;
  goal: number;
  progressPercent: number;
  highlights?: string[];
}

export const PROGRAMS: Program[] = [
  {
    id: "education",
    number: "01",
    title: "Education & Digital Literacy",
    tagline: "Empowering young minds for a brighter digital future.",
    description: "Scholarships, after-school classes and computer access for children who would otherwise be left out of the digital age.",
    fullDescription: "Our education initiative provides underprivileged students with access to modern learning resources, digital tools, and mentorship to help them thrive in school and beyond.",
    image: "https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Children learning in a classroom",
    href: "/our-work/education",
    raised: 53458,
    goal: 87609,
    progressPercent: 63,
    highlights: [
      "Digital learning centers equipped with computers & internet",
      "Merit & need-based student scholarships",
      "After-school tutoring and homework support",
      "Teacher training and educational material distribution"
    ]
  },
  {
    id: "elderly-care",
    number: "02",
    title: "Elderly Care & Support",
    tagline: "Dignity, healthcare, and warmth for our senior citizens.",
    description: "Health camps, companionship, pensions guidance and digital training for the elders who built our communities.",
    fullDescription: "We provide comprehensive health, emotional, and social support to senior citizens, ensuring they live with honor, self-respect, and adequate medical support.",
    image: "https://images.pexels.com/photos/5973471/pexels-photo-5973471.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Elderly person being cared for",
    href: "/our-work/elderly-care",
    raised: 34180,
    goal: 84000,
    progressPercent: 41,
    highlights: [
      "Regular health checkups & free medicine distribution",
      "Guidance & assistance for government pensions",
      "Companionship programs & recreational activities",
      "Basic digital literacy for smartphone & banking support"
    ]
  },
  {
    id: "community",
    number: "03",
    title: "Community Development",
    tagline: "Building resilient and self-reliant rural communities.",
    description: "Village infrastructure, water, sanitation and livelihoods that communities build and own themselves.",
    fullDescription: "Our community programs foster self-reliance through sustainable infrastructure, clean water access, sanitation projects, and vocational skill training.",
    image: "https://images.pexels.com/photos/11444459/pexels-photo-11444459.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Rural village community",
    href: "/our-work/community",
    raised: 61200,
    goal: 78500,
    progressPercent: 78,
    highlights: [
      "Clean drinking water facilities & sanitation units",
      "Women's self-help groups & skill development",
      "Rural infrastructure repair and community halls",
      "Disaster relief and seasonal support drives"
    ]
  }
];
