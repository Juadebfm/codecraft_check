import Link from "next/link";
import React from "react";
import { CiDollar } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="grid grid-cols-4 place-content-between place-items-center px-[25px] py-7 w-full">
      <Link href="/">
        <CiDollar size={25} />
      </Link>
      <Link href="/messages">
        <AiOutlineMessage size={25} />
      </Link>
      <Link href="/settings">
        <CiWallet size={25} />
      </Link>
      <Link href="/settings">
        <CiTimer size={25} />
      </Link>
    </footer>
  );
};

export default Footer;
