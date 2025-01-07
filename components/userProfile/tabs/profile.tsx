"use client";
import { useUser } from "@/providers/userProvider";
import React from "react";
import Image from "next/image";
import ProfileUpdater from "@/components/forms/profileUpdater";
import AvatarSelector from "../avatarSelector";

export default function Profile() {
  const { user } = useUser();
  return (
    <section className="flex flex-col items-center w-full gap-4">
      <h2 className="text-2xl font-semibold tracking-wider">
        Edit your profile!
      </h2>
      <p>aloy here. In this place, you can change your crendentias and such.</p>
      <div className="relative my-4">
        <Image
          className="flex items-center justify-center rounded-full ring-4 ring-stone-500 text-stone-800"
          src={`/avatars/${user?.avatar}.png`}
          height={170}
          width={170}
          alt={`${user?.username.slice(0, 2)}`}
        />
        <AvatarSelector user={user}/>
      </div>
      <ProfileUpdater/>
    </section>
  );
}
