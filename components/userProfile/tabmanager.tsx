"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import General from "./tabs/general";
import Orders from "./tabs/orders";
import Discounts from "./tabs/discounts";
import Profile from "./tabs/profile";

export default function TabManager() {
  const params = useSearchParams();
  const tab = params.get("tab");

  let selectedTab;
  switch (tab) {
    case "profile":
      selectedTab = <Profile />;
      break;
    case "orders":
      selectedTab = <Orders />;
      break;
    case "discounts":
      selectedTab = <Discounts />;
      break;
    default:
      selectedTab = <General />;
      break;
  }

  return (
    <article className="ring-2 ring-stone-700 w-full md:w-[80%] flex flex-col items-center py-4 px-6 ">
      {selectedTab}
    </article>
  );
}
