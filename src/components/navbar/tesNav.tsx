'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Room & Rate', href: '/rooms' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Local Cuisine', href: '/cuisine' },
  { label: 'Contact', href: '/contact' },
];

export default function TesNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href='/'>
            <Image src="/logo.png" alt="Pema Homestay" width={200} height={100} className="h-16 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-xl font-semibold">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${isActive(href) ? 'text-primary' : 'hover:text-primary'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700">
              Book Your Stay
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 font-semibold">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block transition-colors ${isActive(href) ? 'text-primary' : 'hover:text-primary'
                }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/book" onClick={() => setMenuOpen(false)}>
            <button className="mt-2 w-full bg-primary text-white px-4 py-2 rounded hover:bg-red-700">
              Book Your Stay
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
