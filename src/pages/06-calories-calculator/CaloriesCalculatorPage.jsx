import React, { useState } from "react";
import Breadcrumbs from "../../components/shared-component/Breadcrumbs.jsx";
import CaloriesCalculatorForm from "../../components/06c-calories-calculator/CaloriesCalculatorForm.jsx";
import CaloriesResult from "../../components/06c-calories-calculator/CaloriesResult.jsx";

export default function CaloriesCalculatorPage() {
  const [isError, setIsError] = useState(false);

  // const [gender, setGender] = useState("Male");
  // const [age, setAge] = useState("");
  // const [weight, setWeight] = useState("");
  // const [height, setHeight] = useState("");
  // const [goalWeight, setGoalWeight] = useState("");
  // const [activityLevel, setActivityLevel] = useState("");
  // const [goal, setGoal] = useState("Lose");
  // const [intensity, setIntensity] = useState("Moderate");
  // const [dailyCal, setDailyCal] = useState(0);
  // const [protein, setProtein] = useState(0);
  // const [carb, setCarb] = useState(0);
  // const [fat, setFat] = useState(0);
  // const [totalCal, setTotalCal] = useState(0);
  // const [estimatedDays, setEstimatedDays] = useState(0);

  return (
    <main className="max-w-[1440px] mx-auto mb-16 pt-14">
      <Breadcrumbs style="mx-8 mb-8 text-[#b9b9b9] font-medium" breadcrumb={"Calories Calculator"} />
      <div className="overflow-hidden border-[1.5px] border-bright-grey rounded-4xl shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 1440px:flex 1440px:justify-between">
        <CaloriesCalculatorForm isError={isError} setIsError={setIsError} />
        <CaloriesResult />
      </div>
    </main>
  );
}
