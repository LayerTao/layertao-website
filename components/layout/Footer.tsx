"use client";

import Image from "next/image";
import { RiSendPlaneFill, RiTwitterXFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-border/40 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo, Description, and Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Left Column: Brand & Socials */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white">
              <Image
                src="/tao-logo.svg"
                alt="LayerTao Logo"
                width={16}
                height={16}
                priority
                className="w-auto"
              />
            </div>

            <p className="mt-6 text-t-secondary text-base max-w-sm leading-relaxed font-sans">
              The infrastructure layer powering the next generation of Bittensor
              applications.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://t.me/layertao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111111] border-[0.5px] border-border/40 rounded-xl text-t-secondary hover:text-white hover:bg-[#1a1a1a] transition-all"
                aria-label="Telegram"
              >
                <RiSendPlaneFill className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/layertao"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111111] border-[0.5px] border-border/40 rounded-xl text-t-secondary hover:text-white hover:bg-[#1a1a1a] transition-all"
                aria-label="Twitter"
              >
                <RiTwitterXFill className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Columns: Links */}
          <div>
            <h3 className="font-sans font-medium text-white mb-6">Product</h3>
            <ul className="space-y-4 font-sans text-sm text-t-secondary">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-white transition-colors"
                >
                  Ecosystem
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@taoresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="https://docs.layertao.com/learn-more/editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-medium text-white mb-6">
              Developers
            </h3>
            <ul className="space-y-4 font-sans text-sm text-t-secondary">
              <li>
                <a
                  href="https://docs.layertao.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a  href="https://github.com/LayerTao"
                  target="_blank"
                  rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-medium text-white mb-6">Company</h3>
            <ul className="space-y-4 font-sans text-sm text-t-secondary">
              <li>
                <a
                  href="/terms-and-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@layertao.com"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Watermark */}
        <div className="mt-16 pt-8 border-t-[0.5px] border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-t-secondary">
            © 2026 LayerTao. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm font-sans font-medium text-white">
            <Image
              src="/tao-logo.svg"
              alt="LayerTao Logo"
              width={16}
              height={16}
              priority
              className="w-auto"
            />
            Built by LayerTao
          </div>
        </div>
      </div>
    </footer>
  );
}
