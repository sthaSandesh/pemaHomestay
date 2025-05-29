import TesNavbar from '@/components/navbar/tesNav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function Contact() {
    return (
        <main>
            <section className="bg-[url('/homeBg.png')] bg-cover bg-center min-h-screen">
                <TesNavbar />
            </section>
            <section className="px-2 sm:px-6 lg:px-24 py-10 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Booking Form */}
                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 space-y-6">
                        <h2 className="text-lg font-semibold text-red-600">Booking Inquiry</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            <Input placeholder="Full Name" />
                            <Input placeholder="Email" />
                            <Input placeholder="Phone Number" className="md:col-span-2" />
                            <Input type="date" placeholder="Check-in Date" />
                            <Input type="date" placeholder="Check-out Date" />
                            <select className="border rounded px-3 py-2 text-sm md:col-span-2">
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>3 Guests</option>
                                <option>4+ Guests</option>
                            </select>
                        </div>
                        <Textarea placeholder="Special Requests" rows={4} />
                        <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                            Submit Booking Request
                        </Button>
                    </div>

                    {/* Map and Contact Info */}
                    <div className="space-y-6">
                        <div className="rounded-xl overflow-hidden shadow aspect-video w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.7678465685995!2d85.80483547471002!3d27.53867067627966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ebbda017ba4a03%3A0x15a6d15cd442fc05!2sPema%20Homestay!5e0!3m2!1sen!2snp!4v1748431620487!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pema Homestay Map"
                            ></iframe>
                        </div>

                        <div className="bg-red-600 text-white rounded-xl p-4 sm:p-6 space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">Contact Information</h3>
                                <p className="text-yellow-300">Madan Kundari, Bagmati Province, Nepal</p>
                                <p>+977 9876543210</p>
                                <p>info@pemahomestay.com</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Follow Us</h4>
                                <div className="flex gap-4 mt-2">
                                    <a href="#" className="text-white hover:text-yellow-300"><i className="fab fa-facebook-f" /></a>
                                    <a href="#" className="text-white hover:text-yellow-300"><i className="fab fa-instagram" /></a>
                                    <a href="#" className="text-white hover:text-yellow-300"><i className="fab fa-twitter" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}