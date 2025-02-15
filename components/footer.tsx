import React from "react";
import HyperLink from "./ui/hyperLink";
import Icon from "./ui/Icon";
import Link from "next/link";
import ScrollTopBtn from "./footer/scrollToTopBtn";
import { hyperLinks, infoLinks } from "./footer/links";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center px-6 py-4 ring-1 ring-stone-800 bg-stone-900">
      <ScrollTopBtn />
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
      <Separator/>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-2 py-4">
        <div className="col-span-2 md:col-span-1">
          <h3 className="mb-1 font-semibold">Forbidden finds</h3>
          <p className="px-4 text-sm">
            eCommerce platform set within the land of the Forbidden West, where
            users can browse and{" "}
            <span className="font-semibold text-orange-300">
              &quot;acquire&quot;
            </span>{" "}
            virtual items inspired by the universe of Horizon Forbidden West.
            All elements on the platform are crafted to replicate the aesthetic
            and lore of the game.{" "}
            <span className="font-semibold text-orange-300">
              No real purchases can be made.
            </span>
          </p>
        </div>
        <div className="">
          <h3 className="mb-1 font-semibold">More about the Horizon</h3>
          <ul className="flex flex-col gap-2">
            <h4 className="text-orange-300 underline">Guerrila games</h4>
            {hyperLinks.slice(0, 3).map((link, index) => (
              <li
                key={index}
                className="flex gap-1 sm:ml-4 text-small sm:text-base"
              >
                <Icon folder="socials" img={link.img} size={20} />
                <HyperLink
                  isTextLink={false}
                  href={link.href}
                  label={link.label}
                />
              </li>
            ))}
            <h4 className="text-orange-300 underline">Playstation Studios</h4>
            {hyperLinks.slice(3, 6).map((link, index) => (
              <li
                key={index}
                className="flex gap-1 sm:ml-4 text-small sm:text-base"
              >
                <Icon folder="socials" img={link.img} size={20} />
                <HyperLink
                  isTextLink={false}
                  href={link.href}
                  label={link.label}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="mb-1 font-semibold">Information</h3>
          <ul className="flex flex-col gap-2 text-sm sm:text-base underline sm:no-underline">
            {infoLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="transition-colors duration-100 hover:text-amber-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Separator/>
      <section className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between px-4 pt-4">
        <a
          href="mailto:enzoborrelli_official@outlook.com"
          className="transition-colors duration-100 hover:text-amber-300"
        >
          Contact with us
        </a>
        <p className="text-sm lg:text-base text-center lg:text-left">
          Site designed by{" "}
          <HyperLink
            isTextLink={true}
            href="https://www.enzoborrelli.com.ar/"
            label="Endy Kaishi®"
          />{" "}
          2024 | all rights reserved to{" "}
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
          />{" "}
          or its affiliates
        </p>
      </section>
    </footer>
  );
}
