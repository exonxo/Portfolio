"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.477 12.919H3.857V9h2.957v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.978 0 1.778-.773 1.778-1.729V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  emailUrl?: string;
  className?: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = "Proloy Karmakar",
    title = "Product Designer | Enterprise UX Specialist",
    description = "Proloy is a product designer with 4+ years building enterprise software for retail, supply chain, and healthcare. He specializes in translating operational complexity into scalable, usable systems at Pan-India scale.",
    imageUrl = "https://caerngsicqdfqubm.public.blob.vercel-storage.com/proloy-profile.png",
    githubUrl = "https://github.com/exonxo",
    twitterUrl = "https://twitter.com/proloyoncloud",
    linkedinUrl = "https://www.linkedin.com/in/kproloy",
    emailUrl = "mailto:proloykarmakar25@gmail.com",
    className,
  } = props;

  const socialIcons = [
    { icon: GithubIcon, url: githubUrl, label: "GitHub" },
    { icon: LinkedinIcon, url: linkedinUrl, label: "LinkedIn" },
    { icon: MailIcon, url: emailUrl, label: "Email" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop */}
      <div className="hidden md:block relative h-[500px] w-full">
        {/* Background Image — 50% width, gives photo its own breathing room */}
        <div className="absolute left-0 top-0 h-full w-[50%] rounded-3xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="600px"
            className="object-cover"
            draggable={false}
            priority
          />
        </div>

        {/* Card — 58% width, starts at 42% — only ~8% overlap with the photo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-strong absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-3xl p-8 w-[58%]"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {name}
            </h2>

            <p className="text-sm font-medium text-foreground-muted">
              {title}
            </p>
          </div>

          <p className="text-foreground text-base leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex space-x-4">
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Magnetic key={label} strength={0.5} scale={1.12}>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gradient w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </Link>
              </Magnetic>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass md:hidden max-w-sm mx-auto text-center rounded-3xl p-6"
      >
        {/* Square Mobile Image */}
        <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
            draggable={false}
            priority
          />
        </div>

        <div className="px-4">
          <h2 className="text-xl font-bold text-foreground mb-2">
            {name}
          </h2>

          <p className="text-sm font-medium text-foreground-muted mb-4">
            {title}
          </p>

          <p className="text-foreground text-sm leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex justify-center space-x-4">
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Magnetic key={label} strength={0.5} scale={1.12}>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gradient w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white" />
                </Link>
              </Magnetic>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
