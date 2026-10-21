"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NavLogo } from "./NavLogo";
import { NavDropdown } from "./NavDropdown";
import { MobileDrawer } from "./MobileDrawer";
import { NAV_LINKS, NavCategory } from "./nav-data";

export function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Monitor scroll for shadow & subtle border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth hover handlers with debounce to prevent sudden disappearance
  const handleMouseEnter = (type?: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (type) {
      setActiveDropdown(type);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleDropdownClick = (type?: string) => {
    if (!type) return;
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  const closeDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
  };

  // Do not render public navbar on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="w-full sticky top-0 z-40 bg-white">
      {/* Clean Main Navbar with full-height alignment */}
      <nav
        ref={navRef}
        onMouseLeave={handleMouseLeave}
        className={`w-full transition-all duration-200 border-b bg-white h-18 sm:h-20 ${
          isScrolled ? "shadow-sm border-slate-200/90" : "border-slate-100"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between gap-4 h-full">
            {/* Left: Brand Logo (Mortarboard & SODE Crest) */}
            <div className="shrink-0 flex items-center h-full">
              <NavLogo />
            </div>

            {/* Right: Desktop Navigation Links stretched to full navbar height */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 h-full">
              {NAV_LINKS.map((item: NavCategory) => {
                const isCurrentActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const isDropdownOpen = activeDropdown === item.type;

                if (!item.hasDropdown) {
                  return (
                    <div key={item.title} className="h-full flex items-center">
                      <Link
                        href={item.href}
                        onMouseEnter={() => handleMouseEnter()}
                        className={`text-[15px] font-semibold transition-colors duration-150 py-2 ${
                          isCurrentActive
                            ? "text-[#652a7c]"
                            : "text-slate-800 hover:text-[#652a7c]"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.title}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => handleMouseEnter(item.type)}
                  >
                    <button
                      type="button"
                      onClick={() => handleDropdownClick(item.type)}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      className={`group flex items-center gap-1 text-[15px] font-semibold transition-colors duration-150 h-full py-0 outline-hidden focus-visible:ring-2 focus-visible:ring-[#652a7c] ${
                        isDropdownOpen || isCurrentActive
                          ? "text-[#652a7c]"
                          : "text-slate-800 hover:text-[#652a7c]"
                      }`}
                    >
                      <span>{item.title}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-[#652a7c]" : "text-slate-500 group-hover:text-[#652a7c]"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Centered Desktop Dropdown Card: Starts directly at the end of the header */}
                    {isDropdownOpen && item.type && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 z-50 pointer-events-auto pt-0.5"
                        onMouseEnter={() => handleMouseEnter(item.type)}
                      >
                        <NavDropdown type={item.type} onClose={closeDropdown} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center h-full">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#652a7c] hover:bg-purple-50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#652a7c]"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
