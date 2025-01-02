"use client";
import { useState } from "react";
import LogInForm from "../forms/logInForm";
import SignUpForm from "../forms/signUpForm";
import Icon from "../ui/Icon";

export default function LogInPC() {
  const [haveAccount, setHaveAccount] = useState(false);
  return (
    <article className="relative flex justify-between px-6 rounded-md w-[70%] h-[75%] bg-stone-100">
      <section className="flex flex-col justify-center items-center py-4">
        <h2 className="text-stone-900 text-2xl tracking-wider font-semibold">
          Create an account
        </h2>
        <SignUpForm />
      </section>
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-stone-900 text-2xl tracking-wider font-semibold mb-2">
          Welcome Back!
        </h2>
        <p className="text-stone-700 text-sm tracking-wide">
          type your credentials to Log In to an existing account
        </p>
        <LogInForm />
      </section>
      <section
        className={`absolute h-full w-1/2 bg-stone-700 flex flex-col justify-evenly px-6 items-center ${
          haveAccount
            ? "left-0 rounded-l-md rounded-[3rem]"
            : "left-1/2 rounded-r-md rounded-[3rem]"
        } transition-all duration-300`}
      >
        <div className="flex items-center gap-1">
          <Icon folder="misc" img="aloy" size={30} />
          <h1 className="text-2xl">Forbidden Finds</h1>
        </div>
        <h2 className="text-stone-100 text-3xl text-center tracking-wider font-semibold">
          {haveAccount ? "Are you new around here?" : "Where have you been?"}
        </h2>
        <p className="text-stone-300 tracking-wide text-center px-6">
          {haveAccount
            ? "Aloy here. The hunt begins with the first step — Sign Up to start yours."
            : "Aloy here. The wilds are waiting — Log In to gear up for the journey."}
        </p>
        <button
          onClick={() => setHaveAccount(!haveAccount)}
          className=" bg-orange-300 text-stone-700 px-4 py-2 rounded-md"
        >
          {haveAccount
            ? "Create a new account"
            : "Log In to an existing account"}
        </button>
      </section>
    </article>
  );
}
