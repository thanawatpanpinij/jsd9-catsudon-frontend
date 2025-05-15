import React, { useEffect, useState } from "react";
import SignInSignUp from "../../components/02c-sign-in-sign-up/SignInSignUp";
import Header from "../../components/shared-component/Header";
import TextScroller from "../../components/shared-component/text-scroller/TextScroller";

export default function SignInSignUpPage() {
  const [action, setAction] = useState("Sign in");

  useEffect(() => {
    document.title = `CalNoy | ${action}`;
  }, [action]);

  return (
    <div style={{ background: "linear-gradient(90deg, #ededee, #cff2cf)" }}>
      <Header />
      <SignInSignUp setAction={setAction} />

      <div className="text-center text-small-size mt-6 mb-[115px] lg:mb-6 text-third">
        © 2025 CalNoy. All Rights Reserved
      </div>

      <div className="bottom-0 left-0 w-full z-50">
        <TextScroller />
      </div>
    </div>
  );
}
