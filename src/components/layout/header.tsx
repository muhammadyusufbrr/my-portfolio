"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { name: "_hello", href: "/" },
    { name: "_about-me", href: "/about" },
    { name: "_projects", href: "/projects" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="border-b-[1.5px] border-[#1E2D3D]">
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="w-full inline-block py-[17.6px] pl-[22px] max-w-[311px] text-item border-r border-[#1E2D3D]"
          >
            <span>{"muhammadyusuf-g'lomov"}</span>
          </Link>

          <ul className="flex items-center w-full">
            {links.map((e) => (
              <li key={e.name}>
                <Link
                  href={e.href}
                  className={
                    isActive(e.href) ? "active-nav-item nav-item" : "nav-item"
                  }
                >
                  <span>{e.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className={
            isActive("/contact")
              ? "active-nav-item contact-nav-item"
              : "contact-nav-item"
          }
        >
          <span>_contact-me</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
