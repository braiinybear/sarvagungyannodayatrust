export interface MediaItem {
  id: string;
  title: string;
  category: 'report' | 'press' | 'event';
  categoryLabel: string;
  date: string;
  summary: string;
  image: string;
  linkHref: string;
}

export const MEDIA_REPORTS: MediaItem[] = [
  {
    id: "rep-1",
    title: "Annual Impact Assessment Report 2025-26",
    category: "report",
    categoryLabel: "Field Report",
    date: "January 2026",
    summary: "Comprehensive evaluation of our Gyannodaya digital learning centers and Vatsalya elderly healthcare camps across 30 villages.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkHref: "#"
  },
  {
    id: "rep-2",
    title: "National Youth Physical Fitness & Sports Audit",
    category: "report",
    categoryLabel: "Sports Audit",
    date: "November 2025",
    summary: "Detailed study on rural youth athletic participation, equipment access, and sports infrastructure in tier-2 and tier-3 districts.",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkHref: "#"
  }
];

export const PRESS_RELEASES: MediaItem[] = [
  {
    id: "pr-1",
    title: "Sarvagun Gyannodaya Trust Launches 10 New Digital Classrooms on Vivekananda Jayanti",
    category: "press",
    categoryLabel: "Press Release",
    date: "12th January 2026",
    summary: "Marking National Youth Day, Sarvagun Gyannodaya Trust inaugurates 10 computer-equipped digital learning labs for rural students.",
    image: "https://images.pexels.com/photos/3231358/pexels-photo-3231358.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkHref: "#"
  },
  {
    id: "pr-2",
    title: "Trust Achieves 80G Renewal & Expands Elder Healthcare Drive to 5 New Districts",
    category: "press",
    categoryLabel: "Press Release",
    date: "15th November 2025",
    summary: "Donors continue enjoying 50% tax deduction under 80G as the trust expands free medical checkups for senior citizens.",
    image: "https://images.pexels.com/photos/5973471/pexels-photo-5973471.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkHref: "#"
  }
];

export const EVENTS: MediaItem[] = [
  {
    id: "ev-1",
    title: "Yuva Shakti National Leadership Conclave 2026",
    category: "event",
    categoryLabel: "Upcoming Event",
    date: "24-26 March 2026",
    summary: "A 3-day youth summit focusing on Swami Vivekananda's teachings, disaster volunteerism, civic duties, and sports leadership.",
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkHref: "#"
  },
  {
    id: "ev-2",
    title: "Gramin Sports Olympiad & Athletic Meet",
    category: "event",
    categoryLabel: "Field Event",
    date: "10th February 2026",
    summary: "Over 500 young athletes competed in athletics, football, and kabaddi at our annual grassroots sports tournament.",
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    linkHref: "#"
  }
];
