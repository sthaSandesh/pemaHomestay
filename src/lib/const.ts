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
   { src: '/Hnature1.webp', alt: 'nature' },
    { src: '/Hcusine4.webp', alt: 'cusine' },
    { src: '/Hculture6.webp', alt: 'culture' },
    { src: '/Hcusine5.webp', alt: 'cusine' },
    { src: '/Hculture5.webp', alt: 'culture' },
    { src: '/Hroom6.webp', alt: 'Rooms' },
    { src: '/Hcusine2.webp', alt: 'cusine' },
    { src: '/Hroom1.webp', alt: 'Rooms' },
  ],
  // rooms GalleryImages[1]
  [
    { src: '/Hroom1.webp', alt: 'Room' },
    { src: '/Hroom2.webp', alt: 'Room' },
    { src: '/Hroom3.webp', alt: 'Room' },
    { src: '/Hroom4.webp', alt: 'Room' },
    { src: '/Hroom5.webp', alt: 'Room' },
    { src: '/Hroom6.webp', alt: 'Room' },
    { src: '/Hroom7.webp', alt: 'Room' },
    { src: '/Hroom8.webp', alt: 'Room' },
  ],
  // cuisine GalleryImages[2]
  [
    { src: '/Hcusine1.webp', alt: 'cusine' },
    { src: '/Hcusine2.webp', alt: 'cusine' },
    { src: '/Hcusine3.webp', alt: 'cusine' },
    { src: '/Hcusine4.webp', alt: 'cusine' },
    { src: '/Hcusine5.webp', alt: 'cusine' },
    { src: '/Hcusine6.webp', alt: 'cusine' },
    { src: '/Hcusine7.webp', alt: 'cusine' },
    { src: '/Hcusine8.webp', alt: 'cusine' },
  ],
  // culture GalleryImages[3]
  [
    { src: '/Hculture1.webp', alt: 'culture' },
    { src: '/Hculture7.webp', alt: 'culture' },
    { src: '/Hculture3.webp', alt: 'culture' },
    { src: '/Hculture4.webp', alt: 'culture' },
    { src: '/Hculture2.webp', alt: 'culture' },
    { src: '/Hculture5.webp', alt: 'culture' },
    { src: '/Hculture6.webp', alt: 'culture' },
    { src: '/Hculture8.webp', alt: 'culture' },
  ],
  // nature  GalleryImages[4]
  [
    { src: '/Hnature1.webp', alt: 'nature' },
    { src: '/Hnature2.webp', alt: 'nature' },
    { src: '/Hnature3.webp', alt: 'nature' },
    { src: '/Hnature4.webp', alt: 'nature' },
    { src: '/Hnature5.webp', alt: 'nature' },
    { src: '/Hnature6.webp', alt: 'nature' },
    { src: '/Hnature7.webp', alt: 'nature' },
    { src: '/Hnature8.webp', alt: 'nature' },
  ]
]