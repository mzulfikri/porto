"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
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
import { useState } from "react";
import { useTheme } from "next-themes";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

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

  const { theme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const colorButton = theme === "dark" ? "secondary" : "primary";

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant={colorButton}>
              <ThemeToggle />
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

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            // onClose={() => setIsMobileMenuOpen(false)}
          >
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
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
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
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "text-white" : "text-slate:950";

  const words = `Hello Everyone, Introduce me.`;
  return (
    <div className="container mx-auto p-1 pt-24">
      <div className="px-8 max-w-5xl text-center mx-auto">
        <TextGenerateEffect duration={2} words={words} textColor={textColor} />
      </div>
      <p className="mb-10 text-center text-sm text-zinc-500">
        Hello everyone, introduce me{" "}
        <span className="font-medium">Muhammad Zulfikri</span> and me studying
        at <span className="font-medium">STMIK Kaputama Binjai</span> and am
        currently studying in the 5th semester, Faculty of{" "}
        <span className="font-medium">Computer Science</span> majoring in
        Informatics Engineering. And I am currently working at{" "}
        <span className="font-medium">
          PT.Labani Media Nusantara as a Junior Programmer
        </span>
        . Maybe that&apos;s just my brief explanation, Thank you!
      </p>
    </div>
  );
};
