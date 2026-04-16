import { Navbar } from "@/components/layout/NavBar";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <div className="max-w-3xl mx-auto font-sans pt-20 pb-24 px-6 md:px-8">
        {/* Header Section */}
        <h1 className="text-4xl md:text-[44px] tracking-tight text-white mb-2 font-medium">
          Privacy Policy
        </h1>
        <p className="text-white/50 text-sm md:text-base mb-10">
          Last updated: 25 March, 2026
        </p>

        {/* Content Section */}
        <div className="space-y-10 text-white/70 text-base leading-relaxed">
          <p>
            LayerTao respects your privacy and is committed to protecting your
            data.
          </p>

          {/* 1. Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              1. Information We Collect
            </h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white/90 font-medium">
                  Account Information:
                </strong>{" "}
                email address, API credentials
              </li>
              <li>
                <strong className="text-white/90 font-medium">
                  Usage Data:
                </strong>{" "}
                API requests and metadata, timestamps, and performance metrics
              </li>
              <li>
                <strong className="text-white/90 font-medium">
                  Technical Data:
                </strong>{" "}
                IP address, device/browser information
              </li>
            </ul>
          </section>

          {/* 2. How We Use Data */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              2. How We Use Data
            </h2>
            <p>We use data to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and improve the Services</li>
              <li>Process API requests</li>
              <li>Monitor performance and reliability</li>
              <li>Prevent abuse and ensure security</li>
            </ul>
          </section>

          {/* 3. Data Handling */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              3. Data Handling
            </h2>
            <p>LayerTao is designed with privacy in mind.</p>
            <p>We:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Do not store request content longer than necessary</li>
              <li>Minimize exposure to third-party nodes</li>
              <li>Route requests selectively</li>
            </ul>
            <p className="pt-2">
              However, when interacting with decentralized networks:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Requests may be processed by external nodes</li>
              <li>We cannot fully control third-party behavior</li>
            </ul>
          </section>

          {/* 4. Data Sharing */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              4. Data Sharing
            </h2>
            <p>We do not sell your data.</p>
            <p>We may share limited data with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Infrastructure providers</li>
              <li>Analytics tools</li>
              <li>Network nodes required to process requests</li>
            </ul>
          </section>

          {/* 5. Cookies and Tracking */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              5. Cookies and Tracking
            </h2>
            <p>We may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improve user experience</li>
              <li>Analyze usage patterns</li>
            </ul>
            <p className="pt-2">See our Cookie Policy for more details.</p>
          </section>

          {/* 6. Security */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              6. Security
            </h2>
            <p>We implement reasonable safeguards to protect your data.</p>
            <p>However:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>No system is completely secure</li>
              <li>Use of the Services is at your own risk</li>
            </ul>
          </section>

          {/* 7. Your Rights */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              7. Your Rights
            </h2>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your data</li>
              <li>Request deletion</li>
              <li>Restrict processing</li>
            </ul>
            <p className="pt-2">
              To make a request, contact{" "}
              <a
                href="mailto:hello@layertao.com"
                className="text-white hover:underline underline-offset-4 transition-colors"
              >
                hello@layertao.com
              </a>
            </p>
          </section>

          {/* 8. Changes */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              8. Changes
            </h2>
            <p>We may update this Privacy Policy periodically.</p>
          </section>

          {/* 9. Contact */}
          <section className="space-y-3">
            <h2 className="text-2xl text-white font-medium tracking-tight">
              9. Contact
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
