"use client";
import React, { useState } from "react";
import { links } from "./links";
import NavLink from "./navLink";
import Icon from "@/components/ui/Icon";

export default function NavSmall() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="relative w-full">
      <button onClick={() => setMenu(!menu)}>
        {menu ? (
          <Icon folder="misc" img="arrow ui" size={32} />
        ) : (
          <Icon folder="misc" img="down" size={32} />
        )}
      </button>
      <ul
        className={`absolute flex-col ${
          menu ? "translate-x-0" : "-translate-x-60"
        } transition-transform duration-200 ease-in justify-between p-2 font-semibold tracking-wide divide-y-2 divide-stone-700 bg-stone-800 ring-1 ring-stone-700 text-stone-400`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <NavLink href={link.href} label={link.name} icon={link.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
