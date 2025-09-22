"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Loading from "@/components/loading"; // ✅ Import your component

const navItems = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavClick = (name: string, id: string) => {
    setActive(name);
    setIsMobileOpen(false);
    setIsLoading(true);

    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
      setIsLoading(false);
    }, 1000); // Delay to show loading
  };

  return (
    <>
      <nav className="fixed  top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm text-white shadow-md px-6 py-4">
        <div className="max-w-7xl  mx-auto flex justify-between items-center">
          <div className="lg:hidden">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-10 text-lg font-light tracking-wider mx-auto">
            {navItems.map(({ name, href }) => (
              <li
                key={name}
                onClick={() => handleNavClick(name, href)}
                className={`cursor-pointer relative pb-1 transition-colors duration-300 ${
                  active === name
                    ? "text-orange-800"
                    : "text-gray-400 hover:text-orange-800"
                }`}
              >
                <button>{name}</button>
                {active === name && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        {isMobileOpen && (
          <ul className="lg:hidden mt-4 flex flex-col items-center gap-4 text-base font-light tracking-wide">
            {navItems.map(({ name, href }) => (
              <li
                key={name}
                onClick={() => handleNavClick(name, href)}
                className={`cursor-pointer relative pb-1 transition-colors duration-300 ${
                  active === name
                    ? "text-red-800"
                    : "text-gray-400 hover:text-red-800"
                }`}
              >
                <button>{name}</button>
                {active === name && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white" />
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* ✅ Your custom full-page loading */}
      {isLoading && <Loading />}
    </>
  );
}
