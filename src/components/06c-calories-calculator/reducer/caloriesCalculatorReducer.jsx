import React from "react";
import {
    calculateBMR,
    calculateDailyCal,
    calculateNutrition,
    calculateTDEE,
    calculateTotalCalories,
    estimateDays,
} from "../../../utils/caloriesCalculation";

export const initialState = {
    age: 0,
    weight: 0,
    height: 0,
    goalWeight: 0,
    activityLevel: "",
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
            return { ...state, gender: action.gender };
        case "set_weight":
            return { ...state, weight: action.weight };
        case "set_height":
            return { ...state, height: action.height };
        case "set_goal_weight":
            return { ...state, goalWeight: action.goalWeight };
        case "set_activity_level":
            return { ...state, activityLevel: action.activityLevel };
        case "set_intensity":
            return { ...state, intensity: action.intensity };
        case "calculate_all":
            const bmr = calculateBMR({
                gender: state.gender,
                age: state.age,
                weight: state.weight,
                height: state.height,
            });
            const tdee = calculateTDEE(bmr, state.activityLevel);
            const goal = userGoal(state.weight, state.goalWeight);
            const dailyCal = calculateDailyCal(tdee, goal, state.intensity);
            const totalCalories = calculateTotalCalories(
                state.weight,
                state.goalWeight
            );
            const estimatedDays = estimateDays(state.goalWeight, dailyCal);
            const nutrition = calculateNutrition(dailyCal, goal);
            return {
                ...state,
                bmr,
                tdee,
                dailyCal,
                totalCalories,
                estimatedDays,
                nutrition,
            };
        default:
            throw Error("Unknown action.");
    }
}
