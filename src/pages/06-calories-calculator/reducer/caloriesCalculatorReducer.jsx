import { calculateBMR, calculateDailyCal, calculateNutrition, calculateTDEE, calculateTotalCalories, estimateDays, userGoal } from "../../../utils/caloriesCalculation";

export const initialState = {
  gender: "Male",
  age: "",
  weight: "",
  height: "",
  goalWeight: "",
  activityLevel: "",
  intensity: "Mild",
  bmr: 0,
  tdee: 0,
  dailyCal: 0,
  totalCalories: 0,
  estimatedDays: 0,
  nutrition: {
    protein: 0,
    fat: 0,
    carb: 0,
  },
};

export default function caloriesCalculatorReducer(state, action) {
  switch (action.type) {
    case "set_gender":
      return { ...state, gender: action.payload };
    case "set_age":
      return { ...state, age: action.payload };
    case "set_weight":
      return { ...state, weight: action.payload };
    case "set_height":
      return { ...state, height: action.payload };
    case "set_goal_weight":
      return { ...state, goalWeight: action.payload };
    case "set_activity_level":
      return { ...state, activityLevel: action.payload };
    case "set_intensity":
      return { ...state, intensity: action.payload };
    case "calculate_all": {
      const bmr = calculateBMR({
        gender: state.gender,
        age: state.age,
        weight: state.weight,
        height: state.height,
      });
      // console.log(bmr);
      const tdee = calculateTDEE(bmr, state.activityLevel);
      // console.log(tdee);
      const goal = userGoal(state.weight, state.goalWeight);
      // console.log(goal);
      const dailyCal = calculateDailyCal(tdee, goal, state.intensity);
      // console.log(dailyCal);
      const totalCalories = calculateTotalCalories(state.weight, state.goalWeight);
      // console.log(totalCalories);
      const estimatedDays = estimateDays(state.goalWeight, dailyCal);
      // console.log(estimatedDays);
      const nutrition = calculateNutrition(dailyCal, goal);
      // console.log(nutrition);
      return {
        ...state,
        bmr,
        tdee,
        dailyCal,
        totalCalories,
        estimatedDays,
        nutrition,
      };
    }
    default:
      return state;
  }
}
