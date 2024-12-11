"use client";
import React, { useState } from "react";
import HyperLink from "../ui/hyperLink";
import Icon from "../ui/Icon";

export default function DisclaimerAlert() {
  const [alert, setAlert] = useState(true);
  return (
    <article
      className={`fixed w-1/3 bg-stone-600 ring-2 ring-stone-500 top-40 left-1/3 ${
        alert ? "block" : "hidden"
      } py-2 px-4 rounded-md`}
    >
      <button
        onClick={() => setAlert(false)}
        className="hover:ring-2 ring-amber-500 rounded-md"
      >
        <Icon folder="misc" img="arrow ui" size={32} />
      </button>
      <section className="flex flex-col items-center gap-2 pb-4">
        <h2 className="text-lg sm:text-xl font-bold tracking-widest">
          DISCLAIMER
        </h2>
        <p className="text-justify text-sm sm:text-base text-stone-200">
          This website is a fan-created project inspired by the{" "}
          <HyperLink
            isTextLink={true}
            href="https://www.playstation.com/en-us/games/horizon-forbidden-west/"
            label="Horizon Forbidden West"
          />{" "}
          universe. It is not affiliated with or endorsed by{" "}
          <HyperLink
            isTextLink={true}
            href="https://www.guerrilla-games.com/"
            label="Guerrilla Games"
          />
          ,{" "}
          <HyperLink
            isTextLink={true}
            href="https://www.playstation.com/en-us/"
            label="Playstation Studios"
          />
          , or any related entities. All trademarks, characters, and references
          are the property of their respective owners. The content on this site
          is for entertainment purposes only and does not represent official
          merchandise or in-game items.
        </p>
      </section>
    </article>
  );
}
