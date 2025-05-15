import { useContext } from "react";
import { CaloriesCalculatorContext } from "./CaloriesCalculatorContext";

const useCaloriesCalculatorContext = () =>
  useContext(CaloriesCalculatorContext);

export default useCaloriesCalculatorContext;
