"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { navItems } from "@/lib/const";

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              className=" mr-2"
              src="/logo.png"
              alt="Logo"
              width={120} 
              height={120} 
            />
          </div>

          {/* Nav Items (Desktop) */}
          <ul className="hidden lg:flex ml-14 text-lg font-bold space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} aria-label="Toggle mobile menu">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="mb-6">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
