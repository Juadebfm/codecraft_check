import React from "react";
import { RiHome7Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[25px] py-7 sticky top-0 left-o w-full">
      <Link href="/">
        <RiHome7Line size={25} />
      </Link>
      <span>Proxima OS</span>
      <Link href="/settings">
        <CiSettings size={25} />
      </Link>
    </nav>
  );
};

export default Navbar;
