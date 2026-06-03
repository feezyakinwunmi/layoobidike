"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Books", href: "/books" },
  { label: "Organizations", href: "/organizations" },
  { label: "Coaching", href: "/coaching" },
  { label: "Collaboration", href: "/collaboration" },
  { label: "Contact", href: "/contact" },
//   { label: "Blogs-Hub", href: "/blogs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
      >
        <div
          className="relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500"
          style={{
            backgroundColor: scrolled
              ? "rgba(10,10,10,0.85)"
              : "rgba(10,10,10,0.5)",
            backdropFilter: "blur(20px)",
            border: scrolled
              ? "1px solid rgba(229,193,88,0.2)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.4)"
              : "none",
            maxWidth: "fit-content",
          }}
        >
          {/* Logo / Brand */}
          <Link
            href="#home"
            className="flex items-center gap-2 mr-8"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-12 h-8  flex items-center justify-center"
              style={{ backgroundColor: "#f7cb0b" }}
            >
              <img src="/lo-logo.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 group"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#e9c10f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  {item.label}
                  {/* Hover underline dot */}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "#E5C158",
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block ml-8">
            <Link
              href="#contact"
              style={{ textDecoration: "none" }}
            >
              <button
                className="px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "#e9c10f",
                  color: "#0A0A0A",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e9c10f";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(229,193,88,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E5C158";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Let&apos;s Talk
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: isOpen ? "#E5C158" : "#ffffff",
                borderRadius: "2px",
              }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: "#ffffff",
                borderRadius: "2px",
              }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                backgroundColor: isOpen ? "#E5C158" : "#ffffff",
                borderRadius: "2px",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              backgroundColor: "rgba(10,10,10,0.98)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#e9c10f";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                    }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: "#E5C158",
                      color: "#0A0A0A",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e9c10f";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#E5C158";
                    }}
                  >
                    Let&apos;s Talk
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}