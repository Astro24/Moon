"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/Profile", label: "Profile" },
    { href: "/Profile/order-history", label: "Orders" },
    { href: "/Profile/favorites", label: "Favorites" },
    { href: "/Profile/cart", label: "Cart" },
    { href: "/Profile/shipping-address", label: "Shipping" },
    { href: "/Profile/settings", label: "Settings" },
  ];

  return (
    <nav className="lg:hidden bg-[#F5F6FA] px-2 sm:px-4 py-6 flex justify-center">
      <ul className="menu menu-horizontal bg-white rounded-lg text-white gap-0 sm:gap-1 text-[10px] sm:text-sm p-1 sm:p-2 shadow-md">
        {links.map(({ href, label }, i) => {
          const active = pathname === href;
          return (
            <motion.li
              key={href}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.07,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="relative"
            >
              {active && (
                <motion.div
                  layoutId="active-pill-mobile"
                  className="absolute inset-0 bg-[#3A3845] rounded-lg z-0"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
              <Link
                href={href}
                className={`relative z-10 px-3 py-1.5 rounded-lg bg-transparent hover:bg-transparent ${
                  active ? "text-white" : "text-black"
                }`}
              >
                {label}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
