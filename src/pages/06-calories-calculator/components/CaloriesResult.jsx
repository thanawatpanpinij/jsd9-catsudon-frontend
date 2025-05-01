import React, { useContext } from "react";
import { GiMeat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import formatNumber from "../../../utils/formatNumber.js";
import { IconContext } from "react-icons/lib";
import { CaloriesCalculatorContext } from "../context/caloriesCalculatorContext.jsx";

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
    <section className="p-8 text-third bg-primary-background rounded-l-[6rem] 1440px:w-[min(40%,550.4px)]">
      <h2 className="mb-8 text-center text-[2rem] font-semibold">Your Daily Macro Goal</h2>
      <div>
        <p className="text-heading02-size text-secondary text-center font-bold">{formatNumber(state.dailyCal)}</p>
        <p className="text-third text-medium-size text-center">kcal</p>
      </div>
      <section className="mb-8 ">
        <h3 className="mb-8 text-normal-size font-medium">Daily Macro</h3>
        <section className="1440px:grid 1440px:gap-4 1440px:grid-cols-3">
          {nutritionData.map(({ label, value, icon }) => (
            <div key={label} className="relative grid place-items-center p-4 pt-12 bg-white rounded-2xl">
              <IconContext.Provider
                value={{
                  color: "var(--color-third)",
                  title: `${label} icon`,
                }}
              >
                {icon}
              </IconContext.Provider>
              <h4 className="mb-4 text-large-size text-primary font-semibold">{value}g</h4>
              <p className="text-grey">{label}</p>
            </div>
          ))}
        </section>
      </section>
      <section className="1440px:grid 1440px:gap-4 1440px:grid-cols-2">
        {[
          {
            label: `Total Calories to ${state.goal === "Lose" ? "Lose" : state.goal === "Maintain" ? "Maintain" : "Gain"}`,
            value: state.totalCalories,
          },
          { label: "Estimated Days", value: state.estimatedDays },
        ].map(({ label, value }) => (
          <div key={label} className="px-4 py-8 text-center bg-white rounded-2xl">
            <p className="mb-4 text-primary text-[2rem] font-semibold">{formatNumber(value)}</p>
            <p className="text-grey">{label}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
