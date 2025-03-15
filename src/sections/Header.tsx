

"use client";

import { MobileNav } from "./MobileNav"; // Import MobileNav component

export const Header = () => {
  return (
    <div className="w-full z-10 py-3">
      <div className="max-[481px]:block min-[482px]:hidden">
        <MobileNav />
      </div>

      <div className="hidden min-[482px]:flex fixed top-5 left-0 w-full justify-center z-50">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#Hero" className="nav-item">Home</a>
          <a href="#Projects" className="nav-item">Projects</a>
          <a href="#About" className="nav-item">About</a>
          <a
            href="/LakshyaDabralResumeFullStackDeveloper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
          >
            Resume
          </a>
          <a href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};
