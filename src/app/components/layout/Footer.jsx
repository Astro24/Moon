"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-primary text-base-content p-8">
        <aside>
          <img src="/logoLight.svg" alt="Moon Logo" />
          <p>Handcrafted in Vietnam since 1650 </p>
          <Link href="/SignUp">
            <button className="btn btn-outline mt-4 hover:bg-white hover:text-black">
              Get Started <FaArrowRight />
            </button>
          </Link>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/About" className="link link-hover">
            About Us
          </Link>
          <Link href="/Blog" className="link link-hover">
            Blog
          </Link>
          <Link href="/Contact" className="link link-hover">
            Contact Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web Design</a>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Mobile Design</a>
        </nav>
        <nav>
          <h6 className="footer-title">Portfolio</h6>
          <a className="link link-hover">Corprate Websites</a>
          <a className="link link-hover">E-Commerce</a>
          <a className="link link-hover">Mobile Apps</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-primary text-base-content">
        <aside>
          <p>Copyright © 2023 | All right reserved | <a className="link link-hover">All Terms & Conditions</a> | <a className="link link-hover">Privacy Policy</a></p>
        </aside>
      </footer>
    </>
  );
}
