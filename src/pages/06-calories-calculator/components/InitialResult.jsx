import React, { useContext } from "react";
import { CaloriesCalculatorContext } from "../context/CaloriesCalculatorContext";

export default function InitialResult() {
  const { state } = useContext(CaloriesCalculatorContext);
  return (
    <section
      className={`${
        state.showResult ? "hidden opacity-0" : "flex opacity-100"
      } flex-col justify-center items-center text-white p-8 text-center bg-third transition-discrete duration-200 1440px:w-[40%] 1440px:rounded-bl-[5rem]`}
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
        <p className="absolute right-8 bottom-[-30px] text-secondary text-5xl font-caveat rotate-[-8deg]">
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
