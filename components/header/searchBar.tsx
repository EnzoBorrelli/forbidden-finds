import React from "react";
import Icon from "../ui/Icon";

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        className="h-6 px-1 text-stone-900 focus:ring-0 focus:outline-none bg-stone-300 rounded-s-md"
        type="text"
        placeholder="look for goods"
      />
      <button className="flex items-center justify-center transition-colors duration-100 hover:bg-yellow-700 size-6 bg-stone-500 rounded-r-md">
        <Icon folder="misc" img="focus" size={20} />
      </button>
    </div>
  );
}
