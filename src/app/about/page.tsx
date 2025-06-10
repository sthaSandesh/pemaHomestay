import TesNavbar from '@/components/navbar/tesNav'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <main>
            <section
                className="bg-[url('/homeBg.png')] bg-cover bg-center min-h-screen ">
                <TesNavbar />
            </section>

            <section className='padx py-16'>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div>
                            <h3 className="text-2xl lg:text-4xl font-bold text-primary mb-2">About Us</h3>
                            <p className="text-muted-foreground">
                                Founded in 1995 by Mr. Pema Lama as a small farm, Pema Homestay has grown into a larger facility under the management of his son, Mr. Phurpa Namgel Lama, offering guests a unique rural experience.
                            </p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">
                                Pema Homestay is a peaceful retreat in Madan Kundari, Kavrepalanchowk, 87 km from Kathmandu. Established in 1995 by the late Mr. Pema Lama, it offers a unique experience of Nepali farm life and Tamang culture.
                                Managed by his son, Mr. Phurpa Namgel Lama, the homestay features comfortable rooms, bathroom facilities, internet, a restaurant, a meeting hall, and a self-kitchen for guests to enjoy. Located between the Sunkoshi and Chaurikhola Rivers, it&apos;s the perfect place to connect with nature.
                            </p>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/aboutus.webp"
                            alt="About Pema Homestay"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full max-w-md"
                        />
                    </div>

                </div>
            </section>
            <section className='px-2 lg:p-16 '>
                <div className="relative rounded-xl overflow-hidden h-[600px]">
                    {/* Background Image */}
                    <Image
                        src="/storyFarmLife.webp"
                        alt="Our Story & Farm Life"
                        width={1920}
                        height={1200}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white max-w-2xl px-4">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                                Our Story & Farm Life
                            </h2>
                            <p className="text-sm md:text-base leading-relaxed">
                                Pema Homestay is a peaceful retreat in Madan Kundari, Kavrepalanchowk, 87 km from Kathmandu, nestled between the Sunkoshi and Chaurikhola Rivers. Surrounded by lush greenery and stunning mountain views, it offers an authentic Nepali farm life and Tamang culture experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='padx py-16'>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/Storyfarm.webp"
                            alt="story and farm "
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full max-w-md"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Our Story</h3>
                            <p className="text-muted-foreground">
                                Founded in 1995 by Mr. Pema Lama as a small farm, Pema Homestay has grown into a larger facility under the management of his son, Mr. Phurpa Namgel Lama, offering guests a unique rural experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Farm Life</h3>
                            <p className="text-muted-foreground">
                                Guests can join daily activities at Himalayan Farm and Training Center, such as harvesting vegetables, caring for animals, and enjoying fresh, local meals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='padx py-16'>
                <div className="text-center">
                    <h2 className="font-bold text-3xl text-primary mb-2">How to Reach Pema Homestay</h2>
                    <p className="text-muted-foreground font-semibold">
                        The journey offers a scenic drive through peaceful hills and traditional villages.
                    </p>
                </div>
                <div className="flex justify-center mt-8">
                    <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="155" height="6" rx="3" fill="#F19204" />
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row items-center pt-8">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <ul className="list-disc font-semibold text-muted-foreground pb-4 lg:text-lg pl-5 space-y-2">
                            <li>
                                Kathmandu Bus Park <span className="text-primary font-semibold">(0 km)</span> &rarr; Dhulikhel <span className="text-primary font-semibold">(30 km)</span>
                            </li>
                            <li>
                                Dhulikhel <span className="text-primary font-semibold">(30 km)</span> &rarr; Pachkhal <span className="text-primary font-semibold">(45 km)</span>
                            </li>
                            <li>
                                Pachkhal <span className="text-primary font-semibold">(45 km)</span> &rarr; Dolaaghat <span className="text-primary font-semibold">(55 km)</span>
                            </li>
                            <li>
                                Dolaaghat <span className="text-primary font-semibold">(55 km)</span> &rarr; Chaurideurali <span className="text-primary font-semibold">(60 km)</span>
                            </li>
                            <li>
                                Chaurideurali <span className="text-primary font-semibold">(60 km)</span> &rarr; Deurali Bazar <span className="text-primary font-semibold">(70 km)</span>
                            </li>
                            <li>
                                Deurali Bazar <span className="text-primary font-semibold">(70 km)</span> &rarr; Madan <span className="text-primary font-semibold">(87 km)</span>
                            </li>
                        </ul>
                    </div>
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/wayPema.png"
                            alt="About Pema Homestay"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full max-w-md"
                        />
                    </div>

                </div>
            </section>
            <section className='padx py-16'>
                <div className="text-center">
                    <h2 className="font-bold text-3xl text-primary mb-2">Travel Options to Pema Homestay</h2>
                </div>
                <div className="flex justify-center mt-8">
                    <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="155" height="6" rx="3" fill="#F19204" />
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row items-center pt-8">
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/travelOpt.webp"
                            alt="About Pema Homestay"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover w-full max-w-md"
                        />
                    </div>
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <ul className="list-disc font-semibold text-muted-foreground pb-4 lg:text-lg pl-5 space-y-2">
                            <li>Private Vehicle (Recommended for comfort and flexibility)</li>
                            <li>Local or Tourist Bus to Dolalghat, then hire a jeep or local taxi</li>
                            <li>Motorbike Ride for adventurous travelers</li>
                        </ul>

                    </div>


                </div>
            </section>
        </main>
    )
}
