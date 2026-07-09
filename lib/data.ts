// Centralized data for the Ashtanga Yoga site.
// Using free Unsplash CDN photos for imagery.

export type ClassItem = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  time: string;
  name: string;
  level: "All Levels" | "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  duration: string;
};

export const classes: ClassItem[] = [
  { day: "Mon", time: "07:00", name: "Ashtanga Mysore",     level: "All Levels",   instructor: "Aanya Rao",      duration: "90 min" },
  { day: "Mon", time: "18:30", name: "Vinyasa Flow",        level: "Intermediate", instructor: "Mira Kapoor",    duration: "75 min" },
  { day: "Tue", time: "08:00", name: "Hatha Foundations",   level: "Beginner",     instructor: "Leah Bennett",   duration: "60 min" },
  { day: "Tue", time: "19:00", name: "Prenatal Yoga",       level: "All Levels",   instructor: "Sofia Marín",    duration: "60 min" },
  { day: "Wed", time: "07:00", name: "Ashtanga Led Class",  level: "Advanced",     instructor: "Aanya Rao",      duration: "90 min" },
  { day: "Wed", time: "12:15", name: "Lunch Flow",          level: "Intermediate", instructor: "Tomás Vela",     duration: "45 min" },
  { day: "Thu", time: "08:00", name: "Hatha Foundations",   level: "Beginner",     instructor: "Leah Bennett",   duration: "60 min" },
  { day: "Thu", time: "19:00", name: "Restorative Yin",     level: "All Levels",   instructor: "Mira Kapoor",    duration: "75 min" },
  { day: "Fri", time: "07:30", name: "Vinyasa Flow",        level: "Intermediate", instructor: "Tomás Vela",     duration: "75 min" },
  { day: "Fri", time: "17:30", name: "Candlelit Hatha",     level: "All Levels",   instructor: "Sofia Marín",    duration: "60 min" },
  { day: "Sat", time: "09:00", name: "Slow Flow & Breath",  level: "All Levels",   instructor: "Aanya Rao",      duration: "90 min" },
  { day: "Sat", time: "11:30", name: "Prenatal Yoga",       level: "All Levels",   instructor: "Sofia Marín",    duration: "60 min" },
  { day: "Sun", time: "10:00", name: "Community Mysore",    level: "All Levels",   instructor: "Mira Kapoor",    duration: "120 min" },
];

export type Instructor = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
};

export const instructors: Instructor[] = [
  {
    name: "Aanya Rao",
    role: "Lead Ashtanga Teacher",
    bio: "Aanya has practiced and taught Ashtanga for over fifteen years, studying in Mysore and Bali. Her classes blend steady breath with disciplined progression.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    specialties: ["Ashtanga", "Pranayama", "Philosophy"],
  },
  {
    name: "Mira Kapoor",
    role: "Vinyasa & Yin Teacher",
    bio: "Mira's sequences are slow, deliberate and deeply restorative. She believes yoga is a conversation between body, breath and the present moment.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    specialties: ["Vinyasa", "Yin", "Meditation"],
  },
  {
    name: "Tomás Vela",
    role: "Movement & Flow Teacher",
    bio: "Tomás bridges modern movement science with classical yoga. Expect creative flows, mindful transitions and a steady focus on alignment.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    specialties: ["Vinyasa", "Functional Movement"],
  },
  {
    name: "Sofia Marín",
    role: "Prenatal & Hatha Teacher",
    bio: "Sofia is a certified prenatal teacher and birth doula. Her nurturing classes support mothers through every stage of pregnancy and postpartum recovery.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    specialties: ["Prenatal", "Hatha", "Restorative"],
  },
  {
    name: "Leah Bennett",
    role: "Foundations & Beginners",
    bio: "Leah introduces new students to yoga with warmth and clarity. Her beginner courses focus on alignment, breath and building a sustainable home practice.",
    photo:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    specialties: ["Beginners", "Hatha", "Anatomy"],
  },
  {
    name: "Noor Hassan",
    role: "Breathwork & Meditation",
    bio: "Noor guides students through pranayama and meditation practices rooted in both classical and contemporary traditions. Quiet classes, deep shifts.",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    specialties: ["Pranayama", "Meditation", "Yoga Nidra"],
  },
];

export type Retreat = {
  title: string;
  location: string;
  date: string;
  days: number;
  price: string;
  image: string;
  description: string;
};

export const retreats: Retreat[] = [
  {
    title: "Stillness in the Atlas Mountains",
    location: "Marrakech, Morocco",
    date: "Mar 14 — Mar 21, 2026",
    days: 7,
    price: "From $2,480",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
    description:
      "Seven days of dawn Mysore practice, desert meditations, slow Moroccan meals and walks through ancient villages.",
  },
  {
    title: "Coastal Reset — Coastal Portugal",
    location: "Algarve, Portugal",
    date: "May 02 — May 09, 2026",
    days: 7,
    price: "From $3,120",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    description:
      "Salt-air Vinyasa, cliff walks, surf sessions and long, candlelit dinners on the Atlantic — a full nervous-system reset.",
  },
  {
    title: "Forest Hatha Retreat",
    location: "Ubud, Bali",
    date: "Jul 18 — Jul 25, 2026",
    days: 7,
    price: "From $2,950",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=80",
    description:
      "Daily Hatha in open-air shalas, jungle treks, Balinese healing ceremonies and quiet time beneath the canopy.",
  },
];

export type Product = {
  name: string;
  category: string;
  price: number;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    name: "Cork & Cotton Mat",
    category: "Mats",
    price: 88,
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=900&q=80",
    tag: "Bestseller",
  },
  {
    name: "Heritage Mat Bag",
    category: "Accessories",
    price: 64,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hand-Poured Soy Candle",
    category: "Home",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1602523498648-5424d246ea64?auto=format&fit=crop&w=900&q=80",
    tag: "New",
  },
  {
    name: "Cork Yoga Block (Pair)",
    category: "Props",
    price: 48,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hemp Yoga Strap",
    category: "Props",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bolster — Sand Linen",
    category: "Props",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Reusable Water Bottle",
    category: "Accessories",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Travel Eye Pillow",
    category: "Wellness",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1611077540413-30a8c84d7a8a?auto=format&fit=crop&w=900&q=80",
  },
];