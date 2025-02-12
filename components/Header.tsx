"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MoonIcon } from "@heroicons/react/24/outline";
import MarsIcon from "./MarsIcon";

const SatelliteIcon = () => (
  <svg
    className="h-12 w-12 text-gray-400 group-hover:text-gray-300 transition-all"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3l3 3m8 8l3 3m-7-1l4-4m1.5-6.5a3 3 0 010 4.24m-2-2a1 1 0 010 1.42M8 8l8 8M11 11l-2 2"
    />
  </svg>
);

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigation = [
    { name: "Características", href: "#features", icon: MarsIcon },
    { name: "Equipo", href: "#team", icon: SatelliteIcon },
    { name: "Servicios", href: "#services", icon: SatelliteIcon },
    { name: "Testimonios", href: "#testimonials", icon: MoonIcon },
  ];

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    }),
  };

  return (
    <header className="fixed top-0 left-0 h-full z-50 bg-transparent">
      <div className="flex flex-col items-center py-6 space-y-12">
        <nav className="flex flex-col items-center space-y-12 mt-10">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                className="flex flex-col items-center p-4 rounded-full hover:bg-gray-800/10 transition-all group relative"
              >
                <item.icon className="h-12 w-12 text-gray-400 group-hover:text-gray-300 transition-all group-hover:scale-110" />
              </Link>
              {hoveredItem === item.name && (
                <motion.div
                  className="absolute left-full ml-6 w-48 p-4 bg-gray-800/80 backdrop-blur-md text-white rounded-lg shadow-xl"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    } 
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -20, 
                    scale: 0.8,
                    transition: { duration: 0.15 } 
                  }}
                >
                  <motion.div
                    className="text-center font-medium text-lg tracking-wide"
                    initial="hidden"
                    animate="visible"
                  >
                    {item.name.split("").map((letter, index) => (
                      <motion.span key={index} custom={index} variants={letterAnimation}>
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
