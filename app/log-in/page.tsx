import LogInMobile from "@/components/logIn/logInMobile";
import LogInPC from "@/components/logIn/logInPC";
import React from "react";

export default function LogIn() {
  return (
    <main className="w-full h-dvh flex justify-center pt-10 px-4">
      <LogInPC/>
      <LogInMobile/>
    </main>
  );
}
