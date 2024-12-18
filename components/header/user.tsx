"use client";
import React, { useState } from "react";
import { links } from "./user/links";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function User({ isUser }: { isUser: boolean }) {
  const [menu, setMenu] = useState(true);
  const username = "Aloy";
  const supabase = createClient();
  async function SignOut() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <button
      onClick={() => setMenu(!menu)}
      className="relative size-6 bg-stone-100 rounded-full ring-1 ring-stone-400 flex items-center justify-center"
    >
      <h4 className="text-stone-700 font-bold">{username.slice(0, 2)}</h4>
      <ul
        className={`absolute flex-col ${
          menu ? "translate-y-0" : "-translate-y-80"
        } transition-transform duration-300 ease-in justify-between p-2 top-10 z-50 right-0 font-semibold tracking-wide divide-y-2 divide-stone-700 bg-stone-800 ring-1 ring-stone-700 text-stone-400`}
      >
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={`hover:text-amber-300 ${
                isUser ? "" : "pointer-events-none text-stone-500"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="hover:text-amber-300">
          {isUser ? (
            <button onClick={SignOut}>Sign Out</button>
          ) : (
            <Link href="/login">Sign In</Link>
          )}
        </li>
      </ul>
    </button>
  );
}
