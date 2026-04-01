import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-paper text-neutral-900 font-sans">
      <Navbar />
      <main className="pt-24 md:pt-20 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="py-8 text-center text-xs text-neutral-400 border-t border-neutral-100 mt-auto">
        &copy; {new Date().getFullYear()} Yue Zhong. All rights reserved.
      </footer>
    </div>
  );
}
