"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const sections = [
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Hobbies", href: "/#interests" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Home">
        <span className="wordmark-mark">M.</span>
        <span className="wordmark-name">MELANIE ONG</span>
      </Link>

      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        <div className="nav-about">
          <Link className="nav-link nav-about-trigger" href="/">
            About <ChevronDown aria-hidden="true" size={13} />
          </Link>
          <div className="nav-dropdown">
            <Link href="/">My focus</Link>
            <Link href="/about">Who I am</Link>
          </div>
        </div>
        {sections.map((section) => (
          <Link
            className="nav-link"
            href={section.href}
            key={section.label}
            onClick={() => setMenuOpen(false)}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}