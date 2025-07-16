import Link from "next/link";
import React from "react";
import NavItems from "./navItems";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center  m-8">
      <Link href="/">
        <p className="text-3xl cursor-pointer">Rabia Solution</p>
      </Link>
      <NavItems />
    </nav>
  );
};

export default NavBar;
