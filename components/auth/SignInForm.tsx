"use client";

//React
import { ChangeEvent, useState } from "react";

//Components
import { SignInButtonWithProvider } from "./SignInButtonWithProvider";

export const SignInForm = () => {
  const [email, setEmail] = useState("");

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const invalidEmail = () => {
    // Basic regex pattern for validating an email
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.trim().length === 0 || !regexPattern.test(email.trim());
  };

  return (
    <form className="flex flex-col gap-2  w-[80%] lg:w-[60%]">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          onChange={handleChangeEmail}
          value={email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <SignInButtonWithProvider disabled={invalidEmail()} provider="email" params={{ email }} />
    </form>
  );
};
