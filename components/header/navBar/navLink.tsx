import Link from "next/link";
import React from "react";
import Icon from "../../ui/Icon";

export default function NavLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: { folder: string; img: string };
}) {
  return (
    <Link
      href={href}
      className="relative inline-block hover:text-stone-50 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-transparent after:via-stone-500 after:to-transparent hover:after:w-full hover:after:scale-x-100 after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
    >
      <span className="flex items-center gap-1">
        <Icon folder={icon.folder} img={icon.img} size={20} />
        {label}
      </span>
    </Link>
  );
}
