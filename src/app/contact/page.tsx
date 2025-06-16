'use client';
import TesNavbar from '@/components/navbar/tesNav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1 Guest',
    requests: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://email.pemahomestay.com/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Booking request sent!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '1 Guest',
          requests: '',
        });
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <main>
      <section className="bg-[url('/homeBg.png')] bg-cover bg-center min-h-[140vw] sm:min-h-screen relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-10">
          <TesNavbar />
        </div>
        <div className="absolute left-4 bottom-4 p-8 text-white lg:max-w-[50%] z-20 hidden lg:flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-2">Contact & Location</h2>
          <h3 className="text-xl font-semibold mb-4">
            Contact us to book your peaceful escape in the hills
          </h3>
        </div>
      </section>

      <section className="px-2 sm:px-6 lg:px-24 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 space-y-6"
          >
            <h2 className="text-lg font-semibold text-red-600">Booking Inquiry</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="md:col-span-2"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <div>
              <p className='text-sm font-bold text-muted-foreground pl-2'>Check In</p>
              <Input
                name="checkIn"
                type="date"
                placeholder="Check-in Date"
                value={formData.checkIn}
                onChange={handleChange}
                required
                />
                </div>
                <div>
              <p className='text-sm font-bold text-muted-foreground pl-2'>Check Out</p>
              <Input
                name="checkOut"
                type="date"
                placeholder="Check-out Date"
                value={formData.checkOut}
                onChange={handleChange}
                required
                />
                </div>
              <select
                name="guests"
                className="border rounded px-3 py-2 text-sm md:col-span-2"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <Textarea
              name="requests"
              placeholder="Special Requests"
              rows={4}
              value={formData.requests}
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white w-full"
            >
              Submit Booking Request
            </Button>
            {status && <p className="text-sm text-center text-gray-700">{status}</p>}
          </form>

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
                <a href="tel:+977 9876543210" className="hover:underline">+977 9876543210</a><br />
                <a href="mailto:info@pemahomestay.com" >info@pemahomestay.com</a>
              </div>
              <div>
                <h4 className="font-semibold">Follow Us</h4>
                <div className="flex gap-4 mt-2">
                  <a href="https://www.facebook.com/pemahomestay/" target='_blank' className="text-white hover:text-yellow-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/pema.homestay_/" target='_blank' className="text-white hover:text-yellow-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.981-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
