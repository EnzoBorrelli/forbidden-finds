import React from "react";
import AsideNav from "@/components/userProfile/asideNav";
import TabManager from "@/components/userProfile/tabmanager";

export default function Account() {
  return (
    <main className="flex flex-col w-full gap-8 px-10 py-6 md:flex-row h-dvh">
      <AsideNav />
      <TabManager/>
    </main>
  );
}
