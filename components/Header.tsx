import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  RocketLaunchIcon, 
  SparklesIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Características", href: "#features", icon: SparklesIcon },
    { name: "Equipo", href: "#team", icon: UserGroupIcon },
    { name: "Servicios", href: "#services", icon: CommandLineIcon },
    { name: "Testimonios", href: "#testimonials", icon: ChatBubbleLeftRightIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-lg border-b border-sky-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo con efecto holográfico */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
            >
              <RocketLaunchIcon className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              NovaDev
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-all group"
              >
                <item.icon className="h-5 w-5 mr-2 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300 group-hover:text-white">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-800/50 text-cyan-400"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Botón CTA */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className="flex items-center px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all group"
              >
                <SparklesIcon className="h-4 w-4 mr-2 text-white animate-pulse" />
                <span className="text-white">Iniciar Proyecto</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3 text-cyan-400" />
                <span className="text-gray-300">{item.name}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-3 mt-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold"
            >
              <SparklesIcon className="h-4 w-4 mr-2 text-white animate-pulse" />
              <span className="text-white">Contactar</span>
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;