"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Organizations", href: "#organizations" },
  { label: "Coaching", href: "#coaching" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Contact", href: "#contact" },
  { label: "Blogs-Hub", href: "#blogs" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-20 pb-10 px-4"
      style={{
        backgroundColor: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <Link
              href="#home"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-20 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#E5C158" }}
              >
                <img
                  src="/lo-logo.jpg"
                  alt="Logo"
                  className="w-full h-full "
                />
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Empowered to Educate, Inspired to Innovate: Uniting Family, Faith,
              and Entrepreneurship with Love, Grace, and Accountability.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#F5D06B" }}
            >
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm py-1.5 transition-colors duration-300"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F5D06B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#F5D06B" }}
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:layo@layoobidike.com"
                className="flex items-center gap-3 text-sm transition-colors duration-300 group"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F5D06B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                  style={{ color: "rgba(229,193,88,0.6)" }}
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="break-all">layo@layoobidike.com</span>
              </a>

              {/* Address */}
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "rgba(229,193,88,0.6)" }}
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  1001-1551 Lycee Place, Ottawa.
                  <br />
                  K1G4B5, Canada.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="w-full mb-8"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            &copy; {currentYear} Layo Obidike. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialIcons />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Made with &#9829; and purpose
          </motion.p>
        </div>
      </div>
    </footer>
  );
}