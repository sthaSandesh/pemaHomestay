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
export const ExpCardData = [
  {
    title: 'Tamang Cultural Experience',
    description: 'Immerse yourself in authentic Tamang culture with traditional dress, music, dance, and rituals.',
    image: '/Monastery.png',
  },
  {
    title: 'Organic Farm Tour',
    description: 'Visit our organic farm, learn about sustainable farming practices, and pick fresh produce.                                          ',
    image: '/yoga.png',
  },
  {
    title: 'Mountain Hiking',
    description: 'Guided hiking tours to scenic viewpoints offering breathtaking panoramas of the Himalayan range.',
    image: '/rafting.png',
  },
  {
    title: 'Tamang Cultural Experience',
    description: 'Immerse yourself in authentic Tamang culture with traditional dress, music, dance, and rituals.',
    image: '/TamangCulture.png',
  },
]
export const CusineCardData = [
  {
    title: 'Dal Bhat',
    description: 'Traditional Nepali meal with lentil soup, rice, and assorted vegetables and pickles.',
    image: '/Monastery.png',
    keyIng: ['Rice', 'Lentils', 'Vegetables', 'Spices'],
  },
  {
    title: 'Local Chicken',
    description: 'Succulent chicken cooked with local spices, served with rice or flatbread.',
    image: '/yoga.png',
    keyIng: ['Chicken', 'Spices', 'Herbs'],
  },
  {
    title: 'local Fish',
    description: 'Freshly caught fish from local rivers, grilled or fried with traditional spices.',
    image: '/rafting.png',
    keyIng: ['Fish', 'Spices', 'Herbs'],
  },
  {
    title: 'Sukuti',
    description: 'Dried and spiced meat, often served as a snack or side dish, showcasing local preservation techniques.',
    image: '/TamangCulture.png',
    keyIng: ['Meat', 'Spices', 'Herbs'],
  },
]
export const CuisineCardData = [
  {
    title: 'Tamang Cultural Experience',
    description: 'Immerse yourself in authentic Tamang culture with traditional dress, music, dance, and rituals.',
    image: '/Monastery.png',
  },
  {
    title: 'Organic Farm Tour',
    description: 'Visit our organic farm, learn about sustainable farming practices, and pick fresh produce.                                          ',
    image: '/yoga.png',
  },
  {
    title: 'Mountain Hiking',
    description: 'Guided hiking tours to scenic viewpoints offering breathtaking panoramas of the Himalayan range.',
    image: '/rafting.png',
  },
  {
    title: 'Tamang Cultural Experience',
    description: 'Immerse yourself in authentic Tamang culture with traditional dress, music, dance, and rituals.',
    image: '/TamangCulture.png',
  },
]


export const GalleryImages = [
  // all GalleryImages[0]
  [
    { src: '/all1.png', alt: 'all Image 1' },
    { src: '/all2.png', alt: 'all Image 2' },
    { src: '/all3.png', alt: 'all Image 3' },
    { src: '/all4.png', alt: 'all Image 4' },
    { src: '/all5.png', alt: 'all Image 5' },
    { src: '/all6.png', alt: 'all Image 6' },
    { src: '/all7.png', alt: 'all Image 7' },
    { src: '/all8.png', alt: 'all Image 8' },
  ],
  // rooms GalleryImages[1]
  [
    { src: '/all3.png', alt: 'all Image 3' },
    { src: '/all8.png', alt: 'all Image 8' },
    { src: '/all1.png', alt: 'all Image 1' },
    { src: '/all7.png', alt: 'all Image 7' },
    { src: '/all6.png', alt: 'all Image 6' },
    { src: '/all4.png', alt: 'all Image 4' },
    { src: '/all5.png', alt: 'all Image 5' },
    { src: '/all2.png', alt: 'all Image 2' },
  ],
  // cuisine GalleryImages[2]
  [
    { src: '/all4.png', alt: 'all Image 4' },
    { src: '/all3.png', alt: 'all Image 3' },
    { src: '/all6.png', alt: 'all Image 6' },
    { src: '/all7.png', alt: 'all Image 7' },
    { src: '/all1.png', alt: 'all Image 1' },
    { src: '/all8.png', alt: 'all Image 8' },
    { src: '/all5.png', alt: 'all Image 5' },
    { src: '/all2.png', alt: 'all Image 2' },
  ],
  // culture GalleryImages[3]
  [
    { src: '/Hculture1.jpg', alt: 'culture' },
    { src: '/Hculture7.jpg', alt: 'culture' },
    { src: '/Hculture3.jpg', alt: 'culture' },
    { src: '/Hculture4.jpg', alt: 'culture' },
    { src: '/Hculture2.jpg', alt: 'culture' },
    { src: '/Hculture5.jpg', alt: 'culture' },
    { src: '/Hculture6.jpg', alt: 'culture' },
    { src: '/Hculture8.jpg', alt: 'culture' },
  ],
  // nature  GalleryImages[4]
  [
    { src: '/Hnature1.jpg', alt: 'nature' },
    { src: '/Hnature2.jpg', alt: 'nature' },
    { src: '/Hnature3.jpg', alt: 'nature' },
    { src: '/Hnature4.jpg', alt: 'nature' },
    { src: '/Hnature5.jpg', alt: 'nature' },
    { src: '/Hnature6.jpg', alt: 'nature' },
    { src: '/Hnature7.jpg', alt: 'nature' },
    { src: '/Hnature8.jpg', alt: 'nature' },
  ]
]