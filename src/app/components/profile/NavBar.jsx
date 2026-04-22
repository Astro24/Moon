"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/Profile", label: "Profile" },
    { href: "/Profile/order-history", label: "Order History" },
    { href: "/Profile/favorites", label: "Favorites" },
    { href: "/Profile/cart", label: "Cart" },
    { href: "/Profile/settings", label: "Settings" },
  ];

  return (
    <nav
      className="hidden lg:flex lg:flex-col sticky top-20 self-start shadow-md"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <ul className="menu bg-background w-60 pl-0 pr-0">
        {links.map(({ href, label }, i) => {
          const active = pathname === href;
          return (
            // Enter animation
            <motion.li
              key={href}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: i * 0.07,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="relative z-1"
            >
              {/* Active pill (button) */}
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute bg-[#3A3845] rounded-lg"
                  style={{
                    top: "8px",
                    bottom: "4px",
                    left: "40px",
                    right: "20px",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28,
                  }}
                />
              )}
              {/* Badge */}
              <AnimatePresence>
                {active && (
                  <motion.span
                    key={href + "-badge"}
                    className="absolute bg-[#3A3845] w-1.25 rounded-r-sm z-20"
                    style={{
                      top: "10px",
                      height: "35px",
                      left: "-19px",
                      right: "2px",
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    exit={{ scaleY: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              {/* All Links */}
              <Link
                href={href}
                className={`relative z-10 flex items-center h-10 text-[14px] font-bold
                  ${
                    active
                      ? "pl-14 pr-6 ml-5 mr-5 mt-2 mb-1 text-white"
                      : "pl-19  text-black font-normal h-10 z-1"
                  }`}
              >
                {label}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      {/* Logout button */}
      <div className="w-60 p-4 mt-auto">
        <Link href="/Login">
          <button className="w-full h-12.5 bg-[#3A3845] text-white text-[14px] font-bold rounded-lg">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
}
