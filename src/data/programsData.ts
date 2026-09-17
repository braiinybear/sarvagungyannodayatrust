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
  colorTheme: 'saffron' | 'azure' | 'crimson' | 'emerald' | 'indigo' | 'violet' | 'amber';
  badgeColor: string;
  raised: number;
  goal: number;
  progressPercent: number;
  highlights?: string[];
  iconName: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "education",
    number: "01",
    title: "Education",
    tagline: "Unlocking human potential through holistic & digital learning.",
    description: "Scholarships, smart classrooms, and digital literacy empowering children to realize the perfection already within them.",
    fullDescription: "Rooted in Swami Vivekananda's belief that 'Education is the manifestation of perfection already in man', we equip underprivileged students with modern learning tools, digital skills, and character-building mentorship.",
    image: "/images/education/3d1c3775-4b8c-4c1f-a88e-e5856c6c8f9d.jpg",
    imageAlt: "Gyannodaya classroom education session",
    href: "/our-work/education",
    colorTheme: "saffron",
    badgeColor: "badge-education",
    iconName: "education",
    raised: 53458,
    goal: 87609,
    progressPercent: 63,
    highlights: [
      "Gyannodaya Digital Learning Centers with computer access",
      "Merit & need-based scholarship assistance",
      "Character building & values-based education",
      "Free learning materials and book distribution drives"
    ]
  },
  {
    id: "social",
    number: "02",
    title: "Social",
    tagline: "Restoring dignity, compassion, and care for every life.",
    description: "Elderly health care, pensions guidance, women's self-help groups, and compassionate aid for vulnerable families.",
    fullDescription: "We serve society with empathy, ensuring senior citizens live with honor, women gain financial self-reliance, and marginalized families receive essential social safety support.",
    image: "/images/social-work/54e0730e-169c-462b-9dd7-f0f9d84bd28f.jpg",
    imageAlt: "Social welfare and community support drive",
    href: "/our-work/social",
    colorTheme: "azure",
    badgeColor: "badge-social",
    iconName: "social",
    raised: 34180,
    goal: 84000,
    progressPercent: 41,
    highlights: [
      "Vatsalya senior citizen care & medical checkups",
      "Self-help group formation for rural women",
      "Financial literacy and government pension support",
      "Essential ration and emergency relief distribution"
    ]
  },
  {
    id: "sports",
    number: "03",
    title: "Sports",
    tagline: "Building physical vigor, discipline, and youth leadership.",
    description: "Grassroots sports academies, athletic training, and tournament sponsorship to build strong minds in strong bodies.",
    fullDescription: "As Swami Vivekananda famously urged youth to build physical strength alongside spiritual fortitude, our sports division trains young athletes in rural and urban areas, providing equipment, coaching, and state-level competition pathways.",
    image: "/images/sports/cd56c3c0-2dfd-4730-ad5d-b38074bcba9d.jpg",
    imageAlt: "Sarvagun Gyannodaya youth sports championship",
    href: "/our-work/sports",
    colorTheme: "crimson",
    badgeColor: "badge-sports",
    iconName: "sports",
    raised: 42800,
    goal: 60000,
    progressPercent: 71,
    highlights: [
      "Youth athletic training camps & coaching support",
      "Equipment distribution for football, athletics & kabaddi",
      "Grassroots sports tournaments in rural districts",
      "Nutritional guidance for young athletes"
    ]
  },
  {
    id: "environment",
    number: "04",
    title: "Environment",
    tagline: "Nurturing Mother Nature for sustainable future generations.",
    description: "Mass tree plantation drives, water conservation structures, solar energy installations, and plastic-free awareness.",
    fullDescription: "We advocate for ecological harmony through community-led tree plantation, rainwater harvesting, solar micro-grids, and waste reduction programs across adopted villages.",
    image: "/images/environment/5f7e0efe-a451-4414-aee6-7bd54a2ec712.jpg",
    imageAlt: "Environmental tree plantation drive",
    href: "/our-work/environment",
    colorTheme: "emerald",
    badgeColor: "badge-environment",
    iconName: "environment",
    raised: 28900,
    goal: 50000,
    progressPercent: 58,
    highlights: [
      "Tree plantation campaigns across 30+ villages",
      "Rainwater harvesting & check-dam construction",
      "Solar street lighting for off-grid rural communities",
      "Clean village & zero-plastic eco drives"
    ]
  },
  {
    id: "nation-building",
    number: "05",
    title: "Nation Building Activities",
    tagline: "Fostering active citizenship, duty, and national pride.",
    description: "Youth leadership conclaves, civic awareness workshops, volunteer brigades, and national integration forums.",
    fullDescription: "Channeling the energy of youth toward constructive nation-building. We organize civic responsibility drives, disaster response volunteer corps, and youth summits to inspire patriotic public service.",
    image: "/images/nation-building/ab95f9e8-c60d-4eaa-9d49-e845e45b04d8.jpg",
    imageAlt: "Nation building youth leadership forum",
    href: "/our-work/nation-building",
    colorTheme: "indigo",
    badgeColor: "badge-nation",
    iconName: "nation",
    raised: 51200,
    goal: 70000,
    progressPercent: 73,
    highlights: [
      "Yuva Shakti national leadership development camps",
      "Civic engagement and electoral awareness drives",
      "Disaster relief volunteer brigade training",
      "Youth summits celebrating national heritage & service"
    ]
  },
  {
    id: "culture-art",
    number: "06",
    title: "Culture & Art",
    tagline: "Preserving heritage, folk arts, and artistic expressions.",
    description: "Supporting traditional artisans, folk performance festivals, cultural preservation, and youth art scholarships.",
    fullDescription: "India's rich cultural tapestry is our pride. We empower traditional craftsmen, preserve endangered folk music & dance forms, and organize cultural exhibitions showcasing India's spiritual art.",
    image: "/images/nation-building/cba21d87-8102-4556-9239-f1b6a9f25ef3.jpg",
    imageAlt: "Cultural & spiritual discourse session",
    href: "/our-work/culture-art",
    colorTheme: "violet",
    badgeColor: "badge-culture",
    iconName: "culture",
    raised: 31000,
    goal: 45000,
    progressPercent: 69,
    highlights: [
      "Folk art and artisan livelihood restoration",
      "Cultural performance festivals for rural youth",
      "Youth art competitions and scholarships",
      "Documentation of traditional Indian art forms"
    ]
  },
  {
    id: "spirituality",
    number: "07",
    title: "Spirituality",
    tagline: "Promoting Swami Vivekananda's universal spiritual values.",
    description: "Universal harmony forums, yoga & meditation sessions, spiritual literature dissemination, and character building.",
    fullDescription: "Inspired by Swami Vivekananda's address at the Parliament of Religions, we promote universal tolerance, self-realization, inner peace, yoga, and character foundation among youth.",
    image: "/images/nation-building/71284457-b009-408e-b43b-01b21ad62df2.jpg",
    imageAlt: "Spiritual discourse and youth character assembly",
    href: "/our-work/spirituality",
    colorTheme: "amber",
    badgeColor: "badge-spirituality",
    iconName: "spirituality",
    raised: 49000,
    goal: 60000,
    progressPercent: 82,
    highlights: [
      "Daily yoga & meditation workshops for mental wellness",
      "Swami Vivekananda teachings & philosophy seminars",
      "Interfaith harmony & universal brotherhood dialogues",
      "Spiritual retreat centers and library access"
    ]
  }
];
