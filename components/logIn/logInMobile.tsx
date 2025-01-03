"use client";
import { useState } from "react";
import LogInForm from "../forms/logInForm";
import SignUpForm from "../forms/signUpForm";

export default function LogInMobile() {
  const [haveAccount, setHaveAccount] = useState(false);
  return (
    <article className="relative flex lg:hidden justify-between items-center px-2 rounded-md w-[350px] md:w-[425px] h-[75%] bg-stone-100">
      <section
        className={` ${
          haveAccount ? "hidden" : "flex"
        } flex-col justify-center items-center pt-28`}
      >
        <h2 className="text-stone-900 text-2xl tracking-wider font-semibold">
          Create an account
        </h2>
        <SignUpForm />
      </section>
      <section
        className={` ${
          haveAccount ? "flex" : "hidden"
        } flex-col justify-center items-center pt-8`}
      >
        <h2 className="text-stone-900 text-2xl tracking-wider font-semibold mb-2">
          Welcome Back!
        </h2>
        <p className="text-stone-700 text-sm text-center tracking-wide">
          type your credentials to Log In to an existing account
        </p>
        <LogInForm />
      </section>
      <section className="absolute h-28 w-full rounded-t-md rounded-b-2xl top-0 left-0 bg-stone-700 flex flex-col justify-evenly px-6 items-center">
        <p className="text-stone-300 text-sm tracking-wide text-center px-6">
          {haveAccount
            ? "Aloy here. The hunt begins with the first step — Sign Up to start yours."
            : "Aloy here. The wilds are waiting — Log In to gear up for the journey."}
        </p>
        <button
          onClick={() => setHaveAccount(!haveAccount)}
          className=" bg-orange-300 text-stone-700 px-2 py-1 rounded-md"
        >
          {haveAccount
            ? "Create a new account"
            : "Log In to an existing account"}
        </button>
      </section>
    </article>
  );
}
