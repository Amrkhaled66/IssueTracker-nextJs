"use client";

import React from "react";
import Link from "next/link";

import { LuLayoutDashboard } from "react-icons/lu";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const NavBar = () => {
  const pathName = usePathname();
  const links = [
    { title: "Dashboard", path: "/" },
    { title: "Issues", path: "/issues" },
  ];
  return (
    <div className="mb-5 flex items-center gap-x-6 border-b border-b-gray-400 px-3 py-6">
      <Link href={"/"}>
        <LuLayoutDashboard className="size-5" />
      </Link>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={clsx("text-sm font-semibold transition-colors", {
            "text-gray-900": pathName === link.path,
            "text-gray-400 hover:text-gray-900": pathName !== link.path,
          })}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
