import { useReducer } from "react";
import caloriesCalculatorReducer, { initialState } from "../reducer/caloriesCalculatorReducer";

export default function useCaloriesCalculator() {
  const [state, dispatch] = useReducer(caloriesCalculatorReducer, initialState);

  const setGender = (gender) => dispatch({ type: "set_gender", payload: gender });
  const setAge = (age) => dispatch({ type: "set_age", payload: age });
  const setWeight = (weight) => dispatch({ type: "set_weight", payload: weight });
  const setHeight = (height) => dispatch({ type: "set_height", payload: height });
  const setGoalWeight = (goalWeight) => dispatch({ type: "set_goal_weight", payload: goalWeight });
  const setActivityLevel = (activityLevel) => dispatch({ type: "set_activity_level", payload: activityLevel });
  const setIntensity = (intensity) => dispatch({ type: "set_intensity", payload: intensity });
  const calculateAll = (dailyCal) => dispatch({ type: "calculate_all", payload: dailyCal });
  return { state, setGender, setAge, setWeight, setHeight, setGoalWeight, setActivityLevel, setIntensity, calculateAll };
}
