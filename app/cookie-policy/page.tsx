import { Navbar } from "@/components/layout/NavBar";
import React from "react";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <div className="max-w-3xl mx-auto font-sans pt-20 pb-24 px-6 md:px-8">
        {/* Header Section */}
        <h1 className="text-4xl md:text-[44px] tracking-tight text-white mb-2 font-medium">
          Cookie Policy
        </h1>
        <p className="text-white/50 text-sm md:text-base mb-10">
          Last updated: 25 March, 2026
        </p>

        {/* Content Section */}
        <div className="space-y-10 text-white/70 text-base leading-relaxed">
          <p>
            This Cookie Policy explains how LayerTao uses cookies and similar
            technologies.
          </p>

          {/* 1. What Are Cookies */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help improve functionality and user experience.
            </p>
          </section>

          {/* 2. Types of Cookies We Use */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              2. Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong className="text-white/90 font-medium block mb-1">
                  Essential Cookies
                </strong>
                Required for:
                <ul className="list-[circle] pl-5 mt-1 space-y-1">
                  <li>Authentication</li>
                  <li>Security</li>
                  <li>Basic functionality</li>
                </ul>
              </li>
              <li>
                <strong className="text-white/90 font-medium block mb-1">
                  Analytics Cookies
                </strong>
                Used to:
                <ul className="list-[circle] pl-5 mt-1 space-y-1">
                  <li>Understand how users interact with the platform</li>
                  <li>Improve performance</li>
                </ul>
              </li>
              <li>
                <strong className="text-white/90 font-medium block mb-1">
                  Preference Cookies
                </strong>
                Used to:
                <ul className="list-[circle] pl-5 mt-1 space-y-1">
                  <li>Remember user settings</li>
                  <li>Enhance usability</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 3. How We Use Cookies */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              3. How We Use Cookies
            </h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>keep you logged in</li>
              <li>monitor usage and performance</li>
              <li>improve the platform</li>
            </ul>
          </section>

          {/* 4. Third-Party Cookies */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              4. Third-Party Cookies
            </h2>
            <p>Some cookies may be set by third-party services, such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>analytics providers</li>
              <li>infrastructure tools</li>
            </ul>
            <p className="pt-2">We do not control these cookies directly.</p>
          </section>

          {/* 5. Managing Cookies */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              5. Managing Cookies
            </h2>
            <p>
              You can control or disable cookies through your browser settings.
            </p>
            <p>Note:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>disabling cookies may affect functionality</li>
            </ul>
          </section>

          {/* 6. Updates */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              6. Updates
            </h2>
            <p>We may update this Cookie Policy as needed.</p>
          </section>

          {/* 7. Contact */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              7. Contact
            </h2>
            <p>
              <a
                href="mailto:hello@layertao.com"
                className="text-white hover:underline underline-offset-4 transition-colors"
              >
                hello@layertao.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
