import React, { useContext } from "react";
import { CaloriesCalculatorContext } from "../context/CaloriesCalculatorContext";
import animation from "../animations.module.css";

export default function InitialResult() {
  const { state } = useContext(CaloriesCalculatorContext);
  return (
    <section
      className={`relative ${
        state.showResult
          ? `right-[-549.59px] opacity-0 invisible hidden ${animation.slideOut}`
          : `right-0 opacity-100 visible`
      } flex flex-col justify-center items-center text-white min-h-[666px] p-8 text-center bg-third 1440px:w-[40%] 1440px:rounded-bl-[5rem]`}
    >
      <div className="mb-8 w-[min(100%,120px)]">
        <img
          src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720533/001-logo-single_qtvxmf.png"
          alt="CalNoy Logo"
        />
      </div>
      <div className="relative mb-10">
        <h2 className="text-[2rem] font-semibold">
          Curious about how much you should eat <span>each day</span>?
        </h2>
        <img
          className="absolute right-15 bottom-0 w-[180px] rotate-2"
          src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746703261/cross-out-line_diz1oh.png"
          alt=""
        />
        <p className="absolute right-8 bottom-[-30px] text-primary text-5xl font-caveat rotate-[-8deg]">
          every day
        </p>
      </div>
      <p className="text-grey">
        Enter your basic information to see calorie and macronutrient
        recommendations tailored to your goal.
      </p>
    </section>
  );
}
