'use client'; // This is the client-side directive

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true); // Track navbar visibility

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting); // Navbar sticky when hero is not visible
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky ? "fixed top-0 left-0 w-full" : ""
      } flex items-center justify-between p-6 bg-black z-50 transition-all duration-300`}
    >
      {/* Logo and title */}
      <Link href="/" className="flex items-center text-4xl font-bold text-white">
        <i className="fas fa-code mr-2 text-3xl" /> Areeba Naeem
      </Link>

      {/* Menu icon */}
      <div
        id="menu"
        className={`fas fa-bars ${menuOpen ? "fa-times" : ""} text-white cursor-pointer text-3xl`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Navbar items */}
      <nav className={`navbar ${menuOpen ? "nav-toggle" : ""} transition-all duration-300`}>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="text-white hover:text-orange-500">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/education" className="text-white hover:text-orange-500">
              Education
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-orange-500">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
