import React from "react";

export default function HyperLink({
  isTextLink,
  href,
  label,
}: {
  isTextLink: boolean;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={` ${
        isTextLink ? "text-yellow-600 font-semibold" : ""
      } hover:text-amber-300 transition-colors duration-100`}
    >
      {label}
    </a>
  );
}
