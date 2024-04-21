import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiDotOutlineFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer
  className="flex flex-col gap-3 bg-white text-black dark:bg-gray-900 dark:text-white"
  id="footer"
>
  <div className="flex flex-col md:flex-row items-center content-start justify-around pb-10 pt-10 md:px-[15rem] gap-[2.5rem] md:gap-[5rem]">
    <div className="flex flex-col justify-center items-center gap-2">
      <Link
        href="/"
        className="flex items-center"
        aria-label="Go back to the home screen"
      >
        <Image
          src="/logo3.png"
          alt="IMS Logo"
          width={80}
          height={80}
          className="object-cover mr-2"
        />
      </Link>
      <Link
          href="/"
          className="font-semibold  text-3xl text-black flex items-center dark:text-white"
          aria-label="Go back to the home screen"
      >
        IMS SYSTEMS PTE LTD
      </Link>
      <p className="text-black text-sm dark:text-white">PROFESSIONAL | INNOVATIVE | RELIABLE</p>
      <p className="text-gray-500 text-sm dark:text-white">Co Reg: 201413518W</p>
    </div>
    <div className="flex flex-col items-center md:items-start gap-1">
      <h4 className="uppercase font-medium inline-block">Company</h4>
      <ul className="text-sm flex flex-col items-center md:items-start gap-1">
        <li>
          <a
            href="/#about"
            className="hover:underline"
            aria-label="View more details about the company"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/#service"
            className="hover:underline"
            aria-label="View a glimps of what services the company provides"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/#product"
            className="hover:underline"
            aria-label="View a glimps of what products the company provides"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/#partner"
            className="hover:underline"
            aria-label="View the partners that the company collaborates with"
          >
            Partners
          </a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col items-center md:items-start gap-1">
      <h4 className="uppercase font-medium inline-block">Contact</h4>
      <ul className="text-sm flex flex-col items-center md:items-start gap-1">
        <li>
          <Link
            href="mailto:support@imsaasia.com"
            className="hover:underline"
            aria-label="Email product and service provider"
          >
            support@imsaasia.com
          </Link>
        </li>
        <li>
          <Link
            href="tel:+6593398013"
            className="hover:underline"
            aria-label="Contact product and service provider"
          >
            HP: +65 9339 8013
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex flex-col items-center md:items-start gap-1">
      <h4 className="uppercase font-medium inline-block">Office Hours</h4>
      <ul className="text-sm flex flex-col items-center md:items-start gap-1">
        <li>Monday - Friday: 9 am - 5 pm</li>
        <li>Saturday: By appointment</li>
        <li>Sunday: Closed</li>
      </ul>
    </div>
  </div>
  <hr className="w-[80%] m-auto border-t-2 border-gray-500/25" />
  <div className="flex flex-col md:flex-row items-center justify-around gap-3 pb-10 pt-10">
    <p className="text-sm text-gray-500">
      &copy; 2024 IMS Systems. All rights reserved.
    </p>
    <div className="flex gap-1 items-center justify-center text-sm text-gray-500">
      <span>Powered by </span>
      <Link
      href="https://alenesoft.com"
      >
      AleneSoft
    </Link>
      {/*<PiDotOutlineFill />*/}
    </div>
  </div>
</footer>
  );
};

export default Footer;
