import { BuiltInProviderType } from "next-auth/providers/index";
import {
  LiteralUnion,
  SignInAuthorizationParams,
  SignInOptions,
  SignOutParams,
  signOut,
  signIn as nextAuthSignIn
} from "next-auth/react";

export const signIn = async (
  provider?: LiteralUnion<BuiltInProviderType> | undefined,
  options?: SignInOptions | undefined,
  authorizationParams?: SignInAuthorizationParams | undefined
) => {
    return nextAuthSignIn(provider, options, authorizationParams);
};

export const logOut = async (options?: SignOutParams<true> | undefined) => {
  return signOut(options);
};
