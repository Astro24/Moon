"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  function isActive(herf) {
    return pathname === herf
      ? "pr-6 pl-14 pt-4 bg-[#3A3845] text-white mr-5 h-[50px] text-bold text-[14px] rounded-lg ml-7 m-3 "
      : "border-b-1 h-[50px] border-[#E0E0E0] rounded-none pl-19 pt-3";
  }

  function badgeMenu(herf) {
    return pathname === herf
      ? "absolute top-3 left-0 h-[50px] bg-[#3A3845] w-[5px] rounded-r-sm"
      : "";
  }

  return (
    <nav className="min-h-screen hidden lg:block pl-0 ">
      <ul className="menu bg-background w-60 pl-0 pr-0">
        <li>
          <Link href={"/Profile"} className={isActive("/Profile")}>
            <span className={badgeMenu("/Profile")}></span>
            Profile
          </Link>
        </li>
        <li>
          <Link
            href={"/Profile/order-history"}
            className={isActive("/Profile/order-history")}
          >
            <span className={badgeMenu("/Profile/order-history")}></span>
            Order History
          </Link>
        </li>
        <li>
          <Link
            href={"/Profile/favorites"}
            className={isActive("/Profile/favorites")}
          >
            <span className={badgeMenu("/Profile/favorites")}></span>
            Favorites
          </Link>
        </li>
        <li>
          <Link href={"/Profile/cart"} className={isActive("/Profile/cart")}>
            <span className={badgeMenu("/Profile/cart")}></span>
            Cart
          </Link>
        </li>
        <li>
          <Link
            href={"/Profile/shipping-address"}
            className={isActive("/Profile/shipping-address")}
          >
            <span className={badgeMenu("/Profile/shipping-address")}></span>
            Shipping Address
          </Link>
        </li>
        <li>
          <Link
            href={"/Profile/settings"}
            className={isActive("/Profile/settings")}
          >
            <span className={badgeMenu("/Profile/settings")}></span>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
