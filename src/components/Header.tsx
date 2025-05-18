import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoUrl from "../assets/img/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-xs z-50 shadow-sm">
      <div className="lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <img src={logoUrl.src} alt="logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a
              href="#features"
              className="text-base font-medium text-gray-900 hover:text-[#4250D8]"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-base font-medium text-gray-900 hover:text-[#4250D8]"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-base font-medium text-gray-900 hover:text-[#4250D8]"
            >
              Testimonials
            </a>
            <a
              href="/blog"
              className="text-base font-medium text-gray-900 hover:text-[#4250D8]"
            >
              Blog
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-[#4250D8]"
            >
              Sign in
            </a> */}
            <a
              href="#waitlist"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border text-white bg-[#4250D8] hover:bg-[#3340b4] border-transparent rounded-md shadow-sm text-base font-medium"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full inset-x-0 bg-white shadow-lg px-4 pt-4 pb-6 z-40"
          >
            <nav className="space-y-4">
              <a
                href="#features"
                className="block text-base font-medium text-gray-900 hover:text-[#4250D8]"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-base font-medium text-gray-900 hover:text-[#4250D8]"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block text-base font-medium text-gray-900 hover:text-[#4250D8]"
              >
                Testimonials
              </a>
              <a
                href="/blog"
                className="block text-base font-medium text-gray-900 hover:text-[#4250D8]"
              >
                Blog
              </a>
            </nav>
            <div className="mt-6">
              {/* <a
                href="#"
                className="block text-center text-base font-medium text-gray-900 hover:text-[#4250D8]"
              >
                Sign in
              </a> */}
              <a
                href="#waitlist"
                className="mt-4 block text-center w-full px-4 py-2 border text-white bg-[#4250D8] hover:bg-[#3340b4] border-transparent rounded-md shadow-sm text-base font-medium"
              >
                Join Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
