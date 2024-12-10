import React from "react";
import Icon from "../ui/Icon";

//TODO: add db and fetch scraps amount

export default function MetalWallet() {
  return (
    <div className="flex items-center gap-1">
      <Icon folder="misc" img="metal scrap" size={32} />
      <h4>2147483647</h4>
    </div>
  );
}
