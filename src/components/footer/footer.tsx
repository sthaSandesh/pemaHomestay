import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Send } from 'lucide-react';
const Footer: React.FC = () => {
    return (
        <React.Fragment>
            <footer className="bg-gray-200 text-primary py-8 px-5 hidden md:block">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <h2 className="text-3xl font-bold ">
                            <Image
                                src="/logo.png"
                                alt="PemaHomestay logo"
                                width={160}
                                height={160}
                                priority={true}
                            />
                        </h2>
                        <p className="text-muted-foreground font-semibold text-justify my-4">
                            Immerse yourself in Tamang culture in the serene hills of Madan Kundari, Nepal, where warm hospitality meets stunning mountain views.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/pemahomestay/" target='_blank' className="text-primary hover:text-red-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/pemahomestay" target='_blank' className="text-primary hover:text-red-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.981-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div >
                        <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
                        <ul className="text-muted-foreground font-semibold  list-none p-0">
                            <li className="mb-2"><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li className="mb-2"><Link href="/about" className="hover:text-primary">About</Link></li>
                            <li className="mb-2"><Link href="/rooms" className="hover:text-primary">Room & Rate</Link></li>
                            <li className="mb-2"><Link href="/experiences" className="hover:text-primary">Experiences</Link></li>
                            <li className="mb-2"><Link href="/cuisine" className="hover:text-primary">Local Cuisine</Link></li>
                            <li className="mb-2"><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="text-gray-400 list-none p-0">
                            <li>Madan Kundari, Bagmati Province, Nepal</li>
                            <li>+9779876543210</li>
                            <li>info@pemahomestay.com</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 rounded-l-md bg-white text-gray-300 border-none focus:outline-none"
                            />
                            <button className="bg-primary p-2 rounded-r-md ">
                                <Send className='h-5 w-5 text-white' />

                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Pema HomeStay. All rights reserved.
                </div>
            </footer>
            <footer className="bg-gray-200 text-primary py-8 px-5  md:hidden">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <h2 className="text-3xl font-bold ">
                            <Image
                                src="/logo.png"
                                alt="DolmaPOS logo"
                                width={160}
                                height={160}
                                priority={true}
                            />
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Simplify your billing, inventory & accounting with our comprehensive business management software.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61574848059131" className="text-primary hover:text-red-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/dolmapos/" className="text-primary hover:text-red-500">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.981-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="text-gray-400 list-none p-0">
                                <li className="mb-2"><Link href="/" className="hover:text-primary">Home</Link></li>
                                <li className="mb-2"><Link href="/features" className="hover:text-primary">Features</Link></li>
                                <li className="mb-2"><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
                                <li className="mb-2"><Link href="/industries" className="hover:text-primary">Industries</Link></li>
                                <li className="mb-2"><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="text-gray-400 list-none p-0">
                                 <li>Madan Kundari, Bagmati Province, Nepal</li>
                            <li>+9779876543210</li>
                            {/* <li>info@pemahomestay.com</li> */}
                            </ul>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 rounded-l-md bg-white text-gray-300 border-none focus:outline-none"
                            />
                            <button className="bg-primary p-2 rounded-r-md ">
                                <Send className='h-5 w-5 text-white' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Pema HomeStay. All rights reserved.
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;