"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#experiences", label: "Experiences" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Research and Project Work" },
  { href: "#skillset", label: "Skillset" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["hero", "experiences", "education", "projects", "skillset", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to handle smooth scroll for hash links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`sticky top-0 z-50 bg-[#1a2238]/80 backdrop-blur border-b border-gray-800 transition-shadow ${scrolled ? "shadow-lg" : "shadow-none"}`}>
      <style>{`
        .nav-underline {
          position: relative;
        }
        .nav-underline::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 2px;
          background: #fff;
          border-radius: 1px;
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .nav-underline:hover::after {
          transform: scaleX(1);
        }
        .nav-underline.active::after {
          background: #fff;
          transform: scaleX(1);
        }
      `}</style>
      <div className="w-full flex items-center px-2 py-3 font-sans">
        <span className="text-lg font-normal text-white tracking-wide uppercase ml-1 mr-auto">SUHANI PATEL</span>
        <ul className="flex gap-4 sm:gap-8 ml-auto">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                {link.href.startsWith("#") ? (
                  <a
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={`nav-underline px-4 py-1.5 rounded-full transition font-medium text-white hover:bg-white/10 ${isActive ? "font-bold underline underline-offset-8" : ""}`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`nav-underline px-4 py-1.5 rounded-full transition font-medium text-white hover:bg-white/10 ${isActive ? "font-bold underline underline-offset-8" : ""}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
} 