"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const navItems: string[] = [
  "Home",
  "About Us",
  "Services",
  "Works",
  "Pricing",
  "Faq",
  "Blog",
  "Contact Us",
];

const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Image
        src="/images/CreaNova_logo.png"
        alt="CreaNova"
        height={500}
        width={123}
      />
      <div>
        {navItems.map((item, key) => (
          <Link
            key={key}
            href={item === "Home" ? "/" : `/${item}`}
            className={`inline-block font-sm ${
              key === 0 ? "text-red" : "text-secondary"
            } ${key === 0 ? "ml-0" : "ml-5"} font-medium`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
