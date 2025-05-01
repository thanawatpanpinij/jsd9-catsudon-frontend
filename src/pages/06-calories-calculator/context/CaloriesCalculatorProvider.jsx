import React from "react";
import useCaloriesCalculator from "../hook/useCaloriesCalculator";
import { CaloriesCalculatorContext } from "./caloriesCalculatorContext";

export default function CaloriesCalculatorProvider({ children }) {
  const { state, setGender, setAge, setWeight, setHeight, setGoalWeight, setActivityLevel, setIntensity, calculateAll } = useCaloriesCalculator();
  return (
    <CaloriesCalculatorContext.Provider
      value={{
        state,
        setGender,
        setAge,
        setWeight,
        setHeight,
        setGoalWeight,
        setActivityLevel,
        setIntensity,
        calculateAll,
      }}
    >
      {children}
    </CaloriesCalculatorContext.Provider>
  );
}
