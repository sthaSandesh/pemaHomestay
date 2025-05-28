// lib/data.ts

export interface Testimonial {
  name: string;
  location: string;
  image: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ankit Panta",
    location: "Kathmandu",
    image: "/ankit.png",
    message:
    "From the moment we arrived, we felt at home. The views, the culture, and the warmth of the people were simply magical.",
  },
  {
    name: "Nima Tamang",
    location: "Dhulikhel",
    image: "/nima.png",
    message:
      "A hidden gem in the hills! The warm hospitality, fresh farm meals, and peaceful environment made our stay unforgettable.",
  },
  {
    name: "Suresh Koju",
    location: "Kathmandu",
    image: "/suresh.png",
    message:
      "Pema Homestay gave us an authentic taste of village life. The hospitality was unmatched, and the scenery—breathtaking",
  },
  {
    name: "Sandesh Shrestha",
    location: "Bhaktapur",
    image: "/sandesh.png",
    message:
      "Waking up to mountain views and the sound of nature was soul-refreshing. Highly recommend for a quiet retreat!",
  },
  {
    name: "Phurba Lama",
    location: "Bhaktapur",
    image: "/phurpa.png",
    message:
      "The perfect blend of comfort and culture. We learned so much about local traditions and enjoyed every meal",
  },
  {
    name: "Saraswati Rai.",
    location: "Nagarkot",
    image: "/girl.png",
    message:
      "Staying at Pema Homestay was a heartwarming experience. The serene surroundings, cozy rooms, and genuine kindness of the hosts made it feel like a second home.",
  },
];
