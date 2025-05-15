import React, { useContext } from "react";
import { GiMeat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import formatNumber from "../../../utils/formatNumber.js";
import { IconContext } from "react-icons/lib";
import { CaloriesCalculatorContext } from "../context/CaloriesCalculatorContext.jsx";
import animation from "../animations.module.css";
// import AnimatedCalories from "./AnimatedCalories.jsx";

export default function CaloriesResult() {
  const { state } = useContext(CaloriesCalculatorContext);
  const nutritionData = [
    {
      label: "Protein",
      value: state.nutrition.protein,
      icon: <GiMeat className="absolute top-[-30px] text-[4rem]" />,
    },
    {
      label: "Carb",
      value: state.nutrition.carb,
      icon: <GiSlicedBread className="absolute top-[-23px] text-[3.75rem]" />,
    },
    {
      label: "Fat",
      value: state.nutrition.fat,
      icon: <LuCandy className="absolute top-[-28px] text-[3.5rem]" />,
    },
  ];
  return (
    <section
      className={`relative ${
        state.showResult
          ? `block right-0 opacity-100 ${animation.slideIn}`
          : `hidden right-[-549.59px] opacity-0 ${animation.slideOut}`
      } p-8 text-third bg-primary-background 1440px:w-[40%] 1440px:rounded-bl-[5rem]`}
    >
      <h2 className="mb-8 text-center text-[2rem] font-semibold">
        Your Daily Macro Goal
      </h2>
      <div className="mb-8 1440px:m-0">
        {/* <AnimatedCalories target={state.dailyCal} /> */}
        {/* <svg viewBox="0 0 500 260">
          <circle
            cx="250"
            cy="130"
            r="120"
            stroke="var(--color-secondary)"
            strokeWidth="15"
            fillOpacity="0"
            strokeLinecap="round"
          />
          <text
            x="185"
            y="130"
            fill="var(--color-secondary)"
            className="text-heading02-size font-bold"
          >
            {formatNumber(state.dailyCal)}
          </text>
          <text
            x="225"
            y="170"
            fill="var(--color-third)"
            className="text-medium-size"
          >
            kcal
          </text>
        </svg> */}
        <p className="z-1 text-heading02-size text-secondary text-center font-bold">
          {formatNumber(state.dailyCal)}
        </p>
        <p className="text-third text-medium-size text-center">kcal</p>
      </div>
      <section className="mb-4">
        <h3 className="mb-16 text-normal-size font-medium">Daily Macro</h3>
        <section className="grid gap-12 576px:grid-cols-3 576px:gap-4">
          {nutritionData.map(({ label, value, icon }) => (
            <div
              key={label}
              className="relative grid place-items-center p-4 pt-12 bg-white rounded-2xl"
            >
              <IconContext.Provider
                value={{
                  color: "var(--color-third)",
                  title: `${label} icon`,
                }}
              >
                {icon}
              </IconContext.Provider>
              <h4 className="mb-4 text-large-size text-primary font-semibold">
                {value}g
              </h4>
              <p className="text-grey">{label}</p>
            </div>
          ))}
        </section>
      </section>
      <section className="grid gap-8 576px:grid-cols-2 576px:gap-4">
        {[
          {
            label: `Total Calories to ${
              state.goal === "Lose"
                ? "Lose"
                : state.goal === "Maintain"
                ? "Maintain"
                : "Gain"
            }`,
            value: state.totalCalories,
          },
          { label: "Estimated Days", value: state.estimatedDays },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="px-4 py-8 text-center bg-white rounded-2xl first:rounded-bl-[3.5rem] last:rounded-br-[3.5rem]"
          >
            <p className="mb-4 text-primary text-[2rem] font-semibold">
              {formatNumber(value)}
            </p>
            <p className="text-grey">{label}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
