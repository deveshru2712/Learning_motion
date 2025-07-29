import {
  ChartLine,
  ChevronLeft,
  ChevronRight,
  Home,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const Links = [
    { id: 1, href: "/", icon: <Home size={20} />, text: "Home" },
    { id: 2, href: "/", icon: <ChartLine size={20} />, text: "Analytics" },
    { id: 3, href: "/", icon: <User size={20} />, text: "User" },
    { id: 4, href: "/", icon: <Settings size={20} />, text: "Setting" },
  ];

  const sidebarVariant = {
    open: { width: "16rem" },
    closed: {
      width: "4.5rem",
      transition: { delay: 0.2 },
    },
  };

  const childVariant = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isActive ? "open" : "closed"}
      variants={sidebarVariant}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen shadow-2xl py-6 bg-white overflow-visible"
    >
      <motion.nav className="w-full flex items-center gap-6 px-4 py-2 overflow-hidden">
        {isActive && (
          <h1 className="text-2xl font-semibold text-neutral-900 whitespace-nowrap">
            Dashboard
          </h1>
        )}
        <button
          onClick={() => setIsActive(!isActive)}
          className="cursor-pointer mx-auto p-2 rounded-full shadow-md flex-shrink-0"
        >
          {isActive ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </motion.nav>

      <motion.div className="mt-6 overflow-visible px-4">
        <motion.ul
          initial={false}
          animate={isActive ? "open" : "closed"}
          variants={parentVariant}
          className="flex flex-col gap-2"
        >
          {Links.map((link) => (
            <motion.li
              key={link.id}
              variants={childVariant}
              transition={{ duration: 0.2 }}
            >
              <a
                href={link.href}
                className="w-full px-4 py-2 rounded-lg cursor-pointer flex items-center gap-3 hover:bg-slate-100 transition-colors"
              >
                {link.icon}
                {isActive && (
                  <span className="text-medium text-neutral-900/90 whitespace-nowrap">
                    {link.text}
                  </span>
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
