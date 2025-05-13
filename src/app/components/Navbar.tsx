"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const colorButton = isDark ? "primary" : "dark";

  const titleButtonNav = isDark ? "☀️ Light" : "🌙 Dark";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant={colorButton} onClick={toggleTheme}>
              {titleButtonNav}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton variant={colorButton} onClick={toggleTheme}>
                {titleButtonNav}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-1 pt-24 relative">
      {/* Curved yellow background */}
      <div
        // className="absolute inset-0 top-0 w-full h-[500px] bg-yellow-400 dark:bg-amber-500
        // rounded-b-[50%] transform -translate-y-1/2 z-0 blur-3xl"
        className="absolute inset-0 top-0 w-full h-[500px] bg-yellow-400/50 dark:bg-amber-500/20
        rounded-b-[50%] transform -translate-y-1/2 z-0 blur-3xl"
        style={{
          borderRadius: "0 0 100% 100%",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="px-8 max-w-5xl mb-10 text-center mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-4">
            <Image src="/avatar.png" height={60} width={60} alt="Avatar" />
            <span className="block text-2xl sm:text-3xl font-bold text-slate-800 dark:text-neutral-200">
              Hello! I&apos;m
            </span>
          </div>
          <div className="mt-3">
            <span className="block text-4xl sm:text-6xl font-extrabold text-blue-700 dark:text-blue-400 drop-shadow-lg">
              Muhammad Zulfikri
            </span>
          </div>
        </div>
        {/* Todo: memperbaiki animasinya. */}
        <p className="mb-10 text-center text-base sm:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          A creative{" "}
          <span className="relative inline-flex items-center">
            <span className="relative z-10 px-2">Web Developer</span>
            <svg
              className="absolute inset-0 w-full h-full -mx-2"
              viewBox="0 0 150 50"
              preserveAspectRatio="none"
            >
              <path
                d="M10,30 C10,10 120,10 180,30 C190,50 10,60 10,30"
                className="stroke-red-500 dark:stroke-red-400 fill-none stroke-[3]"
                pathLength="100"
                style={{
                  strokeDasharray: 100,
                  animation: "drawCircle 2s forwards",
                }}
              />
            </svg>
          </span>
          with a passion for clean design, modern tech. Always building with
          users in mind.
        </p>
      </div>
    </div>
  );
};
