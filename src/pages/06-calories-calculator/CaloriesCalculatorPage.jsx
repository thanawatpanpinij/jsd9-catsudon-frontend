import React, { useState } from "react";
import Breadcrumbs from "../../components/shared-component/Breadcrumbs.jsx";
import { GiMeat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { MdCalculate } from "react-icons/md";
import { IconContext } from "react-icons";
import formatNumber from "../../utils/formatNumber.js";
import CaloriesCalculatorForm from "../../components/06c-calories-calculator/CaloriesCalculatorForm.jsx";
import CaloriesResult from "../../components/06c-calories-calculator/CaloriesResult.jsx";

export default function CaloriesCalculatorPage() {
    const [isError, setIsError] = useState(false);

    if (!age || !weight || !height || !goalWeight || !activityLevel) {
        return setIsError(true);
    }
    const [gender, setGender] = useState("Male");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [goalWeight, setGoalWeight] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [goal, setGoal] = useState("Lose");
    const [intensity, setIntensity] = useState("Moderate");
    const [dailyCal, setDailyCal] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carb, setCarb] = useState(0);
    const [fat, setFat] = useState(0);
    const [totalCal, setTotalCal] = useState(0);
    const [estimatedDays, setEstimatedDays] = useState(0);
    const nutritionData = [
        {
            label: "Protein",
            value: protein,
            icon: <GiMeat className="absolute top-[-30px] text-[4rem]" />,
        },
        {
            label: "Carb",
            value: carb,
            icon: (
                <GiSlicedBread className="absolute top-[-23px] text-[3.75rem]" />
            ),
        },
        {
            label: "Fat",
            value: fat,
            icon: <LuCandy className="absolute top-[-28px] text-[3.5rem]" />,
        },
    ];

    return (
        <main className="max-w-[1440px] mx-auto mb-16 pt-14">
            <Breadcrumbs
                style="mx-8 mb-8 text-[#b9b9b9] font-medium"
                breadcrumb={"Calories Calculator"}
            />
            <div className="overflow-hidden border-[1.5px] border-bright-grey rounded-4xl shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 1440px:flex 1440px:justify-between">
                <CaloriesCalculatorForm />
                <CaloriesResult />
            </div>
        </main>
    );
}
