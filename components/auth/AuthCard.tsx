//Components
import { SignInButtonWithProvider } from "./SignInButtonWithProvider";
import { SignInForm } from "./SignInForm";

export const AuthCard = () => {
  return (
    <div className="flex flex-col gap-10 bg-white w-[90%] lg:w-[30%] h-[60%] items-center rounded-md shadow-md justify-center">
      <p className="text-center text-gray-600">Sign in with email</p>
      <SignInForm />
      <div className="flex flex-col gap-2 w-[80%] lg:w-[60%]">
        <p className="text-center text-gray-600">or with provider</p>
        <SignInButtonWithProvider provider="google" />
        <SignInButtonWithProvider provider="github" />
        <SignInButtonWithProvider provider="gitlab" />
      </div>
    </div>
  );
};
