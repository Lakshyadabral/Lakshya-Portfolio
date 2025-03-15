"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; 

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav max-[481px]:flex min-[482px]:hidden">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 border border-white/15 rounded-full bg-white/20 backdrop-blur-lg text-white z-50 absolute top-5 left-5"
        >
          <Menu size={30} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }} 
            animate={{ x: "0%", opacity: 1 }} 
            exit={{ x: "-100%", opacity: 0 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }} 
            className="fixed inset-0 w-full h-screen z-50 bg-gray-900/90 backdrop-blur-lg border border-white/15 flex flex-col justify-center items-center text-white text-left p-4"
          >
           
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 left-3 p-2 bg-white/20 border border-white/15 rounded-full text-white hover:bg-white/40 transition"
            >
              <X size={30} />
            </button>

           
            <a href="#Hero" className="nav-item py-4 text-lg" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#Projects" className="nav-item py-4 text-lg" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#About" className="nav-item py-4 text-lg" onClick={() => setIsOpen(false)}>About</a>
            <a
              href="/LakshyaDabralResumeFullStackDeveloper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item py-4 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
            <a
              href="#Contact"
              className="nav-item py-4 text-lg bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
