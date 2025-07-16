"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const NavItems = () => {
  const pathname = usePathname();
  const navItems = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "companions",
      href: "/companions",
    },
    {
      label: "subscribtion",
      href: "/subscribtion",
    },
    {
      label: "my journey",
      href: "/my-journey",
    },
  ];
  return (
    <nav>
      {navItems.map(({ label, href }) => (
        <Link className={'p-2 mx-4 text-xl hover:bg-black rounded transition-all hover:text-white'} href={href} key={label}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
