"use client";
import Link from "next/link";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="navbar px-4 py-3 shadow-sm">
      <div className="navbar-start lg:ps-20">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-white dropdown-content rounded-box z-20 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Shop">Shop</Link>
            </li>
            <li>
              <Link href="/Categories">Categories</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="flex items-center">
          <img src="/logoDark.svg" alt="Moon Logo" width={120} height={120} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3 text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/Categories">Categories</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:pe-20">
        <CiSearch size={25} className="cursor-pointer me-4" />
        <Link href="/Profile">
          <PiUserCircleLight size={25} className="cursor-pointer me-4" />
        </Link>
        <Link href="/Cart">
          <CiShoppingCart size={25} className="cursor-pointer me-4" />
        </Link>
        <Link href="/Favorites">
          <CiHeart size={25} className="cursor-pointer me-4" />
        </Link>
      </div>
    </nav>
  );
}
