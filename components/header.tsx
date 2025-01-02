import React from "react";
import MetalWallet from "./header/metalWallet";
import Cart from "./header/cart";
import User from "./header/user";
import Division from "./ui/division";
import SearchBar from "./header/searchBar";
import HomeBtn from "./header/homeBtn";
import NavBar from "./header/navBar";
import DisclaimerAlert from "./header/disclaimerAlert";
import { Separator } from "./ui/separator";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";

export default async function Header() {
  const session = await getServerSession(options);
  const user = session?.user;
  const dbUser = user
    ? await prisma.user.findUnique({
        where: { email: user?.email },
      })
    : null;
  console.log(dbUser);

  return (
    <header className="relative flex-col w-full px-6 py-4 bg-gradient-to-b from-stone-900 from-80% to-transparent">
      {!user ? <DisclaimerAlert /> : ""}
      <div className="flex flex-col items-center justify-between w-full gap-4 mb-1 md:flex-row md:gap-0">
        <HomeBtn />
        <SearchBar />
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <MetalWallet />
            </li>
            <Division />
            <li>
              <Cart />
            </li>
            <Division />
            <li>
              <User user={dbUser} />
            </li>
          </ul>
        </nav>
      </div>
      <Separator />
      <NavBar />
    </header>
  );
}
