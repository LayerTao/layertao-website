"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { RiMenu4Line } from "react-icons/ri";

// Defined once here to be used in both Desktop and Mobile views
const NAV_LINKS = [
  { name: "FEATURES", href: "/#features" },
  { name: "ECOSYSTEM", href: "/#ecosystem" },
  { name: "DEVELOPERS", href: "/#developer" },
  { name: "$LAYERTAO", href: "https://docs.layertao.com/" },
  { name: "RESEARCH", href: "https://medium.com/@taoresearch" },
];

interface NavbarProps {
  isTransparent?: boolean;
}

export function Navbar({ isTransparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`sticky top-0 z-[100] flex items-center justify-center w-full  border-b-[0.5px] border-white/10 transition-all duration-300 ${
          isTransparent ? "bg-transparent border-transparent" : "bg-black"
        }`}
      >
        <div className="max-w-7xl w-full items-center flex justify-between px-6 md:px-8 py-4 md:py-5">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/tao-full-logo.svg"
              alt="LayerTao Logo"
              width={110}
              height={21}
              priority
              className="w-24 md:w-28 h-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-display tracking-[0.05em] text-white/50 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Area */}
          <Button className="group hidden md:flex items-center gap-2 text-[11px] tracking-widest px-6 py-2 relative overflow-hidden min-w-[140px] justify-center">
            {/* The Icon - stays visible */}
            <Image
              src="/icons/hammer.svg"
              alt="Hammer"
              width={14}
              height={14}
              className="w-3.5 h-3.5 shrink-0"
            />

            {/* Text Container */}
            <div className="relative" onClick={() => {window.open("https://platform.layertao.com", "_blank")}}>
              {/* Default Text */}
              <span className="block transition-all duration-300">
                DEVELOPER
              </span>

            
            </div>
          </Button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
            aria-label="Open Menu"
          >
            <RiMenu4Line size={24} />
          </button>
        </div>
      </nav>

      {/* Passing NAV_LINKS down to MobileMenu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
