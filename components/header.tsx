import React from "react";
import MetalWallet from "./header/metalWallet";
import Cart from "./header/cart";
import User from "./header/user";
import Division from "./ui/division";
import SearchBar from "./header/searchBar";
import HomeBtn from "./header/homeBtn";
import NavBar from "./header/navBar";

export default function Header() {
  return (
    <header className="flex-col w-full px-6 py-4 bg-gradient-to-b divide-y-2 divide-stone-500 from-stone-900 from-80% to-transparent">
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
              <User />
            </li>
          </ul>
        </nav>
      </div>
      <NavBar />
    </header>
  );
}
