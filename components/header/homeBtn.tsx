import React from "react";
import Link from "next/link";
import Icon from "../ui/Icon";

export default function HomeBtn() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Icon folder="misc" img="aloy" size={30} />
      <h1 className="text-2xl transition-colors  duration-100 hover:text-yellow-500">
        Forbidden Finds
      </h1>
    </Link>
  );
}
