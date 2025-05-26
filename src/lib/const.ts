export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Room & Rate", href: "/room" },
  { label: "Experiences", href: "/experiences" },
  { label: "Local Cuisine", href: "local" },
  { label: "Contact", href: "/contact" },
];


export const CulturalExperiences = [
  {
    title: 'Monastery Visits',
    description: 'Experience peace and spirituality by visiting ancient monasteries nestled in the serene hills, where you can witness Buddhist rituals and sacred art.',
    image: '/Monastery.png',
  },
  {
    title: 'Yoga & Wellness',
    description: 'Relax, recharge, and find balance with our yoga and wellness retreats set in tranquil natural surroundings, perfect for mind and body rejuvenation.',
    image: '/yoga.png',
  },
  {
    title: 'Sun Koshi Rafting',
    description: 'Feel the thrill of adventure on the Sun Koshi River, known for its exciting rapids and beautiful landscapes — ideal for both beginners and seasoned rafters.',
    image: '/rafting.png',
  },
  {
    title: 'Tamang Culture',
    description: 'Discover the rich traditions, warm hospitality, and unique lifestyle of the Tamang community through cultural tours and local interactions.',
    image: '/TamangCulture.png',
  },
]