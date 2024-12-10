import React from "react";

export default function User() {
  const username = "Aloy";
  return (
    <div className="size-6 bg-stone-100 rounded-full ring-1 ring-stone-400 flex items-center justify-center">
      <h4 className="text-stone-700 font-bold">
        {username.slice(0, 2)}
      </h4>
    </div>
  );
}
