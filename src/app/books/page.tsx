"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const books = [
  {
    id: 1,
    title: "You Are Awesome",
    subtitle: "You Are Like God: Bible Stories Retold for Kids",
    coverImage: "/yaa.jpg",
    authors: "",
    countries: [
      { name: "Canada", link: "https://a.co/d/drkbxzV", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/eAAu4QU", flag: "🇺🇸" },
      { name: "UK", link: "https://a.co/d/eAAu4QU1", flag: "🇬🇧" },
    ],
  },
  {
    id: 2,
    title: "The Empowered Teens",
    subtitle:
      "Daily Affirmation: Cultivating Self-Confidence, Self-Acceptance, Self-Worth and the Love of God for Teens",
    coverImage: "/teda.jpg",
    authors: "Co-authored with Nike Okeke",
    countries: [
      { name: "Canada", link: "https://a.co/d/6wGvrw7", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/aEyuUjg", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/4ZwvGs3", flag: "🇬🇧" },
    ],
  },
  {
    id: 3,
    title: "See the Bees",
    subtitle: "A Delightful Journey to a Bee Farm",
    coverImage: "/stb.jpg",
    authors: "Co-authored with Dr. Olakunle Jaiyesimi",
    countries: [
      { name: "Canada", link: "https://a.co/d/2YKA3Er", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/fLTAvqs", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/61BFcSS", flag: "🇬🇧" },
    ],
  },
  {
    id: 4,
    title: "Ants and Termites",
    subtitle: "An Incredible World of Order",
    coverImage: "/aat.jpg",
    authors: "Co-authored with Dr. Olakunle Jaiyesimi",
    countries: [
      { name: "Canada", link: "https://a.co/d/0wo8rxP", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/es9tcD3", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/j2ftioH", flag: "🇬🇧" },
    ],
  },
  {
    id: 5,
    title: "Rhapsody of Love",
    subtitle: "Rediscovering Your Inner Harmony Through Love and Meditation",
    coverImage: "/rol.jpg",
    authors: "",
    countries: [
      { name: "Canada", link: "https://a.co/d/aEvU3sj", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/i1wxIWp", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/5v0VWUn", flag: "🇬🇧" },
    ],
  },
  {
    id: 6,
    title: "A Visit to Aunt Ngozi",
    subtitle: "A Delightful Journey to a Bee Farm",
    coverImage: "/AVTAN.jpg",
    authors: "Co-authored with Dr. Olakunle Jaiyesimi",
    countries: [
      { name: "Canada", link: "https://a.co/d/3ihn8gK", flag: "🇨🇦" },
      { name: "USA", link: "https://a.co/d/3ihn8gK", flag: "🇺🇸" },
      { name: "UK", link: "https://amzn.eu/d/97ZRWbS", flag: "🇬🇧" },
    ],
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-4 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(229,193,88,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{
              backgroundColor: "rgba(229,193,88,0.08)",
              border: "1px solid rgba(229,193,88,0.2)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E5C158"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span
              className="text-sm font-semibold"
              style={{ color: "#F5D06B" }}
            >
              Our Publications
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading), serif",
              color: "#ffffff",
            }}
          >
            Discover Our{" "}
            <span style={{ color: "#E5C158" }}>Books</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Inspiring reads for children, teens, and adults. Available in
            multiple countries.
          </motion.p>
        </div>
      </section>

      {/* Books Grid Section */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(229,193,88,0.25)";
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(229,193,88,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Book Cover */}
                  <div
                    className="relative h-80 flex items-center justify-center p-8 overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(229,193,88,0.06), rgba(10,10,10,0.5))",
                    }}
                  >
                    <div className="w-56 h-72 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        width={224}
                        height={288}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* E-Book badge */}
                    <div
                      className="absolute bottom-4 right-4 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(10,10,10,0.85)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(229,193,88,0.3)",
                        color: "#F5D06B",
                      }}
                    >
                      E-Book
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3
                      className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-gold-400"
                      style={{ color: "#ffffff" }}
                    >
                      {book.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {book.subtitle}
                    </p>
                    {book.authors && (
                      <p
                        className="text-xs mb-4"
                        style={{ color: "#E5C158" }}
                      >
                        {book.authors}
                      </p>
                    )}

                    {/* Country Links */}
                    <div
                      className="mt-auto pt-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p
                        className="text-sm font-semibold mb-3 flex items-center gap-1"
                        style={{ color: "rgba(255,255,255,0.6)" }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Available in:
                      </p>
                      <div className="flex gap-2">
                        {book.countries.map((country) => (
                          <a
                            key={country.name}
                            href={country.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all group/country"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.03)",
                              color: "rgba(255,255,255,0.6)",
                              textDecoration: "none",
                              border: "1px solid rgba(255,255,255,0.04)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(229,193,88,0.08)";
                              e.currentTarget.style.color = "#F5D06B";
                              e.currentTarget.style.borderColor =
                                "rgba(229,193,88,0.25)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(255,255,255,0.03)";
                              e.currentTarget.style.color =
                                "rgba(255,255,255,0.6)";
                              e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.04)";
                            }}
                          >
                            <span className="text-base">{country.flag}</span>
                            <span className="text-xs">{country.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="relative py-20 md:py-24 px-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(229,193,88,0.08), rgba(10,10,10,0.95))",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(229,193,88,0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#ffffff",
              }}
            >
              Get Updates on New Releases
            </h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Subscribe to receive notifications about our latest books and
              special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 rounded-full text-sm transition-all duration-300 focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(229,193,88,0.4)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.05)";
                }}
              />
              <button
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  backgroundColor: "#E5C158",
                  color: "#0A0A0A",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F5D06B";
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(229,193,88,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#E5C158";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}