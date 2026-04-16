"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiCloseLine,
  RiSendPlaneFill,
  RiGithubFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { Button } from "../ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[]; // Receive the links here
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#0f0f0f]/95 backdrop-blur-2xl lg:hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <Image
              src="/tao-full-logo.svg"
              alt="Logo"
              width={100}
              height={20}
              className="w-24 h-auto"
            />
            <button
              onClick={onClose}
              className="p-2 text-white/70 bg-white/5 rounded-full"
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-col p-8 space-y-8">
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="text-3xl font-display font-medium tracking-tight text-white/90 hover:text-white"
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Footer Area */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-auto p-8 border-t border-white/5 bg-white/[0.02] space-y-8"
          >
            <Button className="w-full justify-center py-4 text-[10px] tracking-[0.2em]">
              <Image
                src="/icons/hammer.svg"
                alt="Hammer"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              DEV PORTAL - COMING SOON
            </Button>

            <div className="flex items-center justify-center gap-8 text-white/40">
              <Link
                href="https://x.com/layertao"
                className="hover:text-white transition-colors"
              >
                <RiTwitterXFill size={22} />
              </Link>
              {/* <Link href="#" className="hover:text-white transition-colors">
                <RiGithubFill size={22} />
              </Link> */}
              <Link
                href="https://t.me/layertao"
                className="hover:text-white transition-colors"
              >
                <RiSendPlaneFill size={22} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
