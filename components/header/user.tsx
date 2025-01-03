"use client";
import React, { useState } from "react";
import Link from "next/link";
import { DbUser } from "@/types/dbUser";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";


//TODO: add useparams for user
//TODO: add user options

export default function User({ user }: { user: DbUser | null }) {
  const [menu, setMenu] = useState(true);
  const name = user !== null ? user.username : "Guest";
  return (
    <div className="relative size-8 bg-stone-100 rounded-full ring-1 ring-stone-300 flex items-center justify-center">
      <button
        onClick={() => setMenu(!menu)}
        className="flex items-center justify-center"
      >
        <Image
          className="rounded-full text-stone-800 flex justify-center items-center"
          src={`${user ? `/avatars/${user?.avatar}.png` : "/avatars/0.png"}`}
          height={32}
          width={32}
          alt={name.slice(0, 2)}
        />
      </button>

      <ul
        className={`absolute flex-col ${
          menu ? "translate-y-0" : "-translate-y-80"
        } transition-transform duration-300 ease-in justify-between p-2 top-10 z-50 right-0 font-semibold tracking-wide divide-y-2 divide-stone-700 bg-stone-800 ring-1 ring-stone-700 text-stone-400`}
      >
          <li>
            <Link
              className={`hover:text-amber-300 ${
                user !== null ? "" : "pointer-events-none text-stone-500"
              }`}
              href={`/${user?.username}`}
            >
              Account
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-amber-300 ${
                user !== null ? "" : "pointer-events-none text-stone-500"
              }`}
              href="/orders"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-amber-300 ${
                user !== null ? "" : "pointer-events-none text-stone-500"
              }`}
              href="/discounts"
            >
              Discounts
            </Link>
          </li>
        <li className="hover:text-amber-300">
          {user !== null ? (
            <button onClick={() => signOut()}>Sign Out</button>
          ) : (
            <button onClick={() => signIn()}>Log In</button>
          )}
        </li>
      </ul>
    </div>
  );
}
