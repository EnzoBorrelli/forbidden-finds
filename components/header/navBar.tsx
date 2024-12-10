import React from "react";
import NavSmall from "./navBar/navSmall";
import NavBig from "./navBar/navBig";

export default function NavBar() {
  return (
    <>
      <div className="flex w-full pt-1 pb-1 lg:hidden">
        <NavSmall />
      </div>
      <div className="hidden w-full pt-1 pb-1 lg:flex">
        <NavBig />
      </div>
    </>
  );
}
