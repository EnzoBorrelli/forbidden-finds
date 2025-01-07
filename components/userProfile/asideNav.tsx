"use client";
import { useUser } from "@/providers/userProvider";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AsideNav() {
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      router.push("/log-in");
    } else if (pathname.includes(`/${user?.username}`)) {
      return;
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  return (
    <aside className="flex flex-col w-full p-4 rounded-md md:w-40 h-fit bg-stone-800 ring-1 ring-stone-700 text-stone-400">
      <Link
        href={`/${user?.username}`}
        className="w-full text-xl font-semibold tracking-wider text-center lg:text-left text-stone-200 hover:text-orange-200"
      >
        My Account
      </Link>
      <ul className="flex flex-col items-center mt-4 space-y-2 text-lg text-center divide-y-2 md:flex-col sm:space-y-0 md:space-y-2 md:divide-y-2 sm:divide-y-0 justify-evenly sm:flex-row divide-stone-700">
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
