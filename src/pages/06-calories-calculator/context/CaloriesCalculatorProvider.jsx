import React from "react";
import useCaloriesCalculator from "../hook/useCaloriesCalculator.jsx";
import { CaloriesCalculatorContext } from "./CaloriesCalculatorContext.jsx";

export default function CaloriesCalculatorProvider({ children }) {
  const {
    state,
    setShowResult,
    setGender,
    setAge,
    setWeight,
    setHeight,
    setGoalWeight,
    setActivityLevel,
    setIntensity,
    calculateAll,
  } = useCaloriesCalculator();
  return (
    <CaloriesCalculatorContext.Provider
      value={{
        state,
        setShowResult,
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
