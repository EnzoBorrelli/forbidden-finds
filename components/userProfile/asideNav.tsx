"use client";
import { useUser } from "@/providers/userProvider";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AsideNav() {
  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/log-in");
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <aside className="w-40 p-4 rounded-md h-fit bg-stone-800 ring-1 ring-stone-700 text-stone-400">
      <Link
        href={`/${user?.username}`}
        className="text-xl font-semibold tracking-wider text-left text-stone-200 hover:text-orange-200"
      >
        My Account
      </Link>
      <ul className="mt-4 space-y-2 text-lg text-center divide-y-2 divide-stone-700">
        <li>
          <Link
            className="hover:text-amber-300"
            href={`/${user?.username}?tab=profile`}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-amber-300"
            href={`/${user?.username}?tab=orders`}
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-amber-300"
            href={`/${user?.username}?tab=discounts`}
          >
            Discounts
          </Link>
        </li>
        <li>
          <button className="hover:text-amber-300" onClick={() => signOut()}>
            Sign Out
          </button>
        </li>
      </ul>
    </aside>
  );
}
