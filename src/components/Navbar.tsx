"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-6 bg-black/70 backdrop-blur-md px-8 py-3 rounded-full border border-blue-500/30">
        {links.map((link) => {
          const active = pathname === link.path;

          return (
            <Link
              key={link.name}
              href={link.path}
              className={`transition-all duration-300 ${
                active
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}