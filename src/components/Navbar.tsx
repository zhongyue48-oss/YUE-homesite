import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

const navItems = [
  { name: "Philosophy", path: "/philosophy" },
  { name: "Project", path: "/project" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F0EA]/80 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-0 md:h-20 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        <Link to="/" className="text-sm font-display tracking-[0.3em] uppercase shrink-0">
          YUE ZHONG
        </Link>
        <nav className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full md:w-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname === "/" && item.path === "/philosophy");
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-xs md:text-sm tracking-wide transition-colors relative py-2",
                  isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-900"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
