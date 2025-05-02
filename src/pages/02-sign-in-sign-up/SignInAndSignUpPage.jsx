import React, { useEffect } from "react";
import SignInSignUp from "../../components/02c-sign-in-sign-up/SignInSignUp";

export default function SignInSignUpPage() {
  useEffect(() => {
    document.title = `CalNoy | ${SignInSignUp.name}`;
  }, []);
  return (
    <div>
      <SignInSignUp />
    </div>
  );
}
