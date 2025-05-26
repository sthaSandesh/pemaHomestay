import CulturalExp from "@/components/home/CulturalExp";
import Gallery from "@/components/home/gallery";
import TesNavbar from "@/components/navbar/tesNav";
import Testimonials from "@/components/testimonials/testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaParking, FaUtensils, FaWifi } from "react-icons/fa";
import { FaKitchenSet, FaPeopleGroup } from "react-icons/fa6";
import { PiMountainsBold } from "react-icons/pi";


export default function Home() {
  return (
    <main>
      <section
        className="bg-[url('/homeBg.png')] bg-cover bg-center min-h-screen ">
        {/* min-h-[calc(100vh-90px)] */}
        <TesNavbar />

        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="text-4xl font-bold">Welcome to Our Hotel</h1>
          <p className="mt-4 text-lg">Experience luxury and comfort like never before.</p>
          <div className="mt-8">
            <a href="#features" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Explore Features
            </a>
          </div>
        </div>
      </section>
      {/* Our Services & Amenities */}
      <section className="bg-primary padx py-16">
        <div className="container  text-white">
          <h2 className="text-3xl font-extrabold text-center mb-4">Our Services & Amenities</h2>
          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
            <Card className="aspect-square min-w-36 h-32 flex items-center justify-center rounded-lg">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <FaWifi size={32} className="text-muted-foreground mb-2" />
                <span className="text-muted-foreground font-medium">Free- Wifi</span>
              </CardContent>
            </Card>
            <Card className="aspect-square min-w-36 h-32 flex items-center justify-center rounded-lg">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <FaUtensils size={32} className="text-muted-foreground mb-2" />
                <span className="text-muted-foreground font-medium">Restaurant</span>
              </CardContent>
            </Card>
            <Card className="aspect-square min-w-36 h-32 flex items-center justify-center rounded-lg">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <FaKitchenSet size={32} className="text-muted-foreground mb-2" />
                <span className="text-muted-foreground font-medium">Self-Kitchen</span>
              </CardContent>
            </Card>
            <Card className="aspect-square min-w-36 h-32 flex items-center justify-center rounded-lg">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <PiMountainsBold size={32} className="text-muted-foreground mb-2" />
                <span className="text-muted-foreground font-medium">Views</span>
              </CardContent>
            </Card>
            <Card className="aspect-square min-w-36 h-32 flex items-center justify-center rounded-lg">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <FaParking size={32} className="text-muted-foreground mb-2" />
                <span className="text-muted-foreground font-medium">Parking</span>
              </CardContent>
            </Card>
            <Card className="aspect-square min-w-36 h-32 flex items-center justify-center rounded-lg">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <FaPeopleGroup size={32} className="text-muted-foreground mb-2" />
                <span className="text-muted-foreground font-medium">Meeting Hall</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* About Pema Homestay */}
      <section className="padx py-16">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-primary mb-2">About Pema Homestay</h2>
          <p className="text-muted-foreground font-semibold">
            A place where tradition meets comfort in the heart of rural Nepal
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="6" rx="3" fill="#F19204" />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-8">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/aboutBedImg.png"
              alt="About Pema Homestay"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover w-full max-w-md"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-8 font-semibold text-justify text-muted-foreground">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mt-8 lg:mt-0 mb-4">
              About Us
            </h2>
            <p className="mb-8">
              Pema Homestay is a peaceful retreat in Madan Kundari, Kavrepalanchowk, 87 km from Kathmandu. Established in 1995 by the late Mr. Pema Lama, it offers a unique experience of Nepali farm life and Tamang culture.
            </p>
            <p>
              Managed by his son, Mr. Phurpa Namgel Lama, the homestay features comfortable rooms, bathroom facilities, internet, a restaurant, a meeting hall, and a self-kitchen for guests to enjoy. Located between the Sunkoshi and Chaurikhola Rivers, it&apos;s the perfect place to connect with nature.
            </p>
            <div className="mt-8">
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Room & Rate */}
      <section className="padx py-16 bg-gray-200">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-primary mb-2">Room & Rate</h2>
          <p className="text-muted-foreground font-semibold">
            Comfortable rooms with traditional Tamang design elements and modern amenities
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="6" rx="3" fill="#F19204" />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-8">

          <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 sm:px-8 font-semibold text-justify text-muted-foreground">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mt-8 lg:mt-0 mb-4">
              Rooms
            </h2>
            <p className="mb-8">
              Our rooms are thoughtfully designed with a perfect blend of comfort and culture.Each space reflects authentic Tamang craftsmanship paired with essential modern amenities. From cozy interiors to peaceful views, every detail is curated to offer you warmth, relaxation, and a true sense of home amidst the hills of Nepal.
            </p>
            <div className="flex items-center justify-center">
              <Button className="px-8">DISCOVER</Button>
            </div>
            <div className="flex gap-2 py-4">
              <Image
                src="/smRoomImg.png"
                alt="About Pema Homestay"
                width={100}
                height={100}
                className="rounded-lg shadow-lg object-cover w-full max-w-md"
              />
              <Image
                src="/smRoomImg.png"
                alt="About Pema Homestay"
                width={100}
                height={100}
                className="rounded-lg shadow-lg object-cover w-full max-w-md"
              />
              <Image
                src="/smRoomImg.png"
                alt="About Pema Homestay"
                width={100}
                height={100}
                className="rounded-lg shadow-lg object-cover w-full max-w-md hidden lg:flex"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/roomImg.png"
              alt="About Pema Homestay"
              width={350}
              height={350}
              className="rounded-lg shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </section>
      {/* Cultural Experience */}
      <section className="padx py-16">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-primary mb-2">Cultural Experience</h2>
          <p className="text-muted-foreground font-semibold">
            Explore culture, nature, and wellness in the heart of rural Nepal.
          </p>
        </div>
        <div className="flex justify-center my-8">
          <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="6" rx="3" fill="#F19204" />
          </svg>
        </div>
        <div className="py-4">
          <CulturalExp />
        </div>
        <div className="flex justify-center mt-8">
          <Button> Explor More </Button>
        </div>
      </section>
      {/* Savor Traditional */}
      <section >
        <div className="bg-[url('/savorTradi.png')] bg-cover bg-center min-h-[calc(100vh-90px)] flex flex-col items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-6xl font-bold mb-4">Savor Traditional</h2>
            <h3 className="text-2xl font-semibold"> Tamang Flavors</h3>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 px-4 lg:max-w-[50%]">
            <p className="text-lg mb-6 font-semibold text-center text-white">Taste the richness of home-cooked meals prepared with fresh farm ingredients, and join our cooking classes for an authentic culinary adventure.</p>
            <Button className="px-8">Explore Menu</Button>

          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="padx py-16 bg-gray-200">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-primary mb-2">Gallery</h2>
          <p className="text-muted-foreground font-semibold">
            Glimpses of our homestay, surroundings, and cultural experiences
          </p>
        </div>
        <div className="flex justify-center my-8">
          <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="6" rx="3" fill="#F19204" />
          </svg>
        </div>
        <div>
          <Gallery />
        </div>
        <div className="flex items-center justify-center mt-4">
          <Button>View More</Button>
        </div>
      </section>
      {/* testimonial */}
      <section className="padx py-16 ">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-primary mb-2">Testimonials</h2>
          <p className="text-muted-foreground font-semibold">
            What Our Guests Say </p>
        </div>
        <div className="flex justify-center my-8">
          <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="6" rx="3" fill="#F19204" />
          </svg>
        </div>
        <div>
          <Testimonials />
        </div>
      </section>
      {/* Book Your Stay */}
      <section className="bg-primary padx py-16 text-white flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-2">Book Your Stay</h3>
          <p className="font-semibold">Contact us to book your peaceful escape in the hills</p>
        </div>
        <Button className="bg-white text-primary font-semibold hover:bg-gray-100">Book Now</Button>
      </section>
    </main>
  );
}
