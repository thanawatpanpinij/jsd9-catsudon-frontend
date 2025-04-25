import React, { useState } from "react";
import Breadcrumbs from "../../components/shared-component/Breadcrumbs.jsx";
import { GiMeat } from "react-icons/gi";
import { GiSlicedBread } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { MdCalculate } from "react-icons/md";
import { IconContext } from "react-icons";
import formatNumber from "../../utils/formatNumber.js";

export default function CaloriesCalculatorPage() {
    const [isError, setIsError] = useState(false);
    const [gender, setGender] = useState("Male");
    const [age, setAge] = useState("");
    const [currentWeight, setCurrentWeight] = useState("");
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

    function calculateBMR() {
        if (age === "Other") return; // เดี๋ยวต้องลบออก อันนี้ hardcode ให้ return ออกไปก่อน
        if (
            !age ||
            !currentWeight ||
            !height ||
            !goalWeight ||
            !activityLevel
        ) {
            return setIsError(true);
        }

        let bmr;

        if (gender === "Female") {
            bmr = 665 + 9.6 * currentWeight + 1.8 * height - 4.7 * age;
        } else {
            bmr = 66 + 13.7 * currentWeight + 5 * height - 6.8 * age;
        }
        console.log("bmr =", bmr);
        calculateTDEE(bmr);
    }

    function calculateTDEE(bmr) {
        let tdee;
        if (activityLevel === "Sedentary (office job)") {
            tdee = bmr * 1.2;
        }
        if (activityLevel === "Light Exercise (1-2 days/week)") {
            tdee = bmr * 1.375;
        }
        if (activityLevel === "Moderate Exercise (3-5 days/week)") {
            tdee = bmr * 1.55;
        }
        if (activityLevel === "Heavy Exercise (6-7 days/week)") {
            tdee = bmr * 1.725;
        }
        if (activityLevel === "Athlete (2 times/day)") {
            tdee = bmr * 1.9;
        }
        console.log("tdee =", tdee);
        calculateDailyCal(tdee);
    }

    function calculateDailyCal(tdee) {
        const step =
            intensity === "Mild" ? 300 : intensity === "Moderate" ? 500 : 700;
        let dailyCal = tdee;
        if (goal === "Lose") {
            dailyCal = tdee - step;
        }
        if (goal === "Gain") {
            dailyCal = tdee + step;
        }
        console.log("daily Cal", dailyCal);
        setDailyCal(Math.round(dailyCal));
        calculateTotalCalories(dailyCal);
        calculateNutrition(dailyCal);
    }

    function calculateTotalCalories(dailyCal) {
        const weightDiff = currentWeight - goalWeight;
        const kcalPerKg = 7700;
        const totalCal = Math.abs(weightDiff * kcalPerKg);
        setTotalCal(totalCal);
        estimateDays(totalCal, dailyCal);
    }

    function estimateDays(totalCal, dailyCal) {
        setEstimatedDays(Math.ceil(totalCal / dailyCal));
    }

    function calculateNutrition(dailyCal) {
        let protein, carb, fat;
        if (goal === "Lose") {
            console.log("Lose");
            protein = dailyCal * 0.4;
            carb = dailyCal * 0.3;
            fat = carb;
        } else if (goal === "Gain") {
            console.log("gain");
            protein = dailyCal * 0.3;
            carb = dailyCal * 0.5;
            fat = dailyCal * 0.2;
        } else {
            console.log("Maintain");
            protein = dailyCal * 0.3;
            carb = dailyCal * 0.4;
            fat = protein;
        }
        setProtein(Math.round(protein / 4));
        setCarb(Math.round(carb / 4));
        setFat(Math.round(fat / 9));
    }
    return (
        <main className="max-w-[1440px] mx-auto mb-16 pt-14">
            <Breadcrumbs
                style="mx-8 mb-8 text-[#b9b9b9] font-medium"
                breadcrumb={"Calories Calculator"}
            />
            <div className="overflow-hidden border-[1.5px] border-bright-grey rounded-4xl shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 1440px:flex 1440px:justify-between">
                <section className="p-8 text-grey 1440px:flex 1440px:gap-8 1440px:flex-col 1440px:justify-between 1440px:w-[min(60%,825.6px)]">
                    <h1 className="text-third text-large-size font-semibold">
                        Calculate Your Calories
                    </h1>
                    <fieldset aria-label="Gender selection">
                        <legend className="mb-3">I'm a</legend>
                        <div className="relative grid grid-cols-3 bg-[#f3f3f3] rounded-full">
                            {["Male", "Female", "Other"].map(
                                (genderOptions) => (
                                    <label
                                        key={genderOptions}
                                        className={`cursor-pointer px-7 py-3 text-center text-third font-medium ${
                                            gender === genderOptions
                                                ? "bg-primary-background"
                                                : ""
                                        } rounded-full transition-colors duration-300`}
                                    >
                                        <input
                                            className="absolute opacity-0"
                                            type="radio"
                                            name="gender"
                                            value={genderOptions}
                                            checked={gender === genderOptions}
                                            onChange={() =>
                                                setGender(genderOptions)
                                            }
                                        />
                                        {genderOptions}
                                    </label>
                                )
                            )}
                        </div>
                    </fieldset>
                    <section className="1440px:flex 1440px:gap-8">
                        <label className="1440px:w-[50%]">
                            Age
                            <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
                                <input
                                    className={`w-full px-4 py-3 ${
                                        age ? "text-third" : ""
                                    } focus:not-placeholder-shown:text-third rounded-full`}
                                    type="Number"
                                    placeholder="Your age"
                                    value={age}
                                    min={0}
                                    onChange={(event) => {
                                        setIsError(false);
                                        setAge(event.target.value);
                                    }}
                                />
                            </div>
                            {age === "" && isError && (
                                <p className="text-secondary">
                                    Please enter your age
                                </p>
                            )}
                        </label>
                        <label className="1440px:w-[50%]">
                            Weight (kg)
                            <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
                                <input
                                    className={`w-full px-4 py-3 ${
                                        currentWeight ? "text-third" : ""
                                    } focus:not-placeholder-shown:text-third rounded-full`}
                                    type="number"
                                    placeholder="Your weight"
                                    value={currentWeight}
                                    min={0}
                                    onChange={(event) => {
                                        setIsError(false);
                                        setCurrentWeight(event.target.value);
                                    }}
                                />
                            </div>
                            {currentWeight === "" && isError && (
                                <p className="text-secondary">
                                    Please enter your weight
                                </p>
                            )}
                        </label>
                    </section>
                    <section className="1440px:flex 1440px:gap-8">
                        <label className="1440px:w-[50%]">
                            Height (cm)
                            <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
                                <input
                                    className={`w-full px-4 py-3 ${
                                        height ? "text-third" : ""
                                    } focus:not-placeholder-shown:text-third rounded-full`}
                                    type="number"
                                    placeholder="Your height"
                                    value={height}
                                    min={0}
                                    onChange={(event) =>
                                        setHeight(event.target.value)
                                    }
                                />
                            </div>
                            {height === "" && isError && (
                                <p className="text-secondary">
                                    Please enter your height
                                </p>
                            )}
                        </label>
                        <label className="1440px:w-[50%]">
                            Goal Weight (kg)
                            <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
                                <input
                                    className={`w-full px-4 py-3 ${
                                        goalWeight ? "text-third" : ""
                                    } focus:not-placeholder-shown:text-third rounded-full`}
                                    type="number"
                                    placeholder="Your goal weight"
                                    value={goalWeight}
                                    min={0}
                                    onChange={(event) => {
                                        setIsError(false);
                                        setGoalWeight(event.target.value);
                                    }}
                                />
                            </div>
                            {currentWeight === "" && isError && (
                                <p className="text-secondary">
                                    Please enter your goal weight
                                </p>
                            )}
                        </label>
                    </section>
                    <div>
                        <label className="relative">
                            Activity Level
                            <select
                                className="appearance-none w-full mt-3 mb-2 px-4 py-3 text-third border border-[#b9b9b9] rounded-full 1440px:block"
                                name="activity-level"
                                value={activityLevel}
                                onChange={(event) => {
                                    setIsError(false);
                                    setActivityLevel(event.target.value);
                                }}
                            >
                                <option value="" disabled>
                                    --Choose your activity level--
                                </option>
                                <option value="Sedentary (office job)">
                                    Sedentary (office job)
                                </option>
                                <option value="Light Exercise (1-2 days/week)">
                                    Light Exercise (1-2 days/week)
                                </option>
                                <option value="Moderate Exercise (3-5 days/week)">
                                    Moderate Exercise (3-5 days/week)
                                </option>
                                <option value="Heavy Exercise (6-7 days/week)">
                                    Heavy Exercise (6-7 days/week)
                                </option>
                                <option value="Athlete (2 times/day)">
                                    Athlete (2 times/day)
                                </option>
                            </select>
                            <IoIosArrowDown className="absolute right-4 bottom-[25%] translate-y-[25%]" />
                        </label>
                        {activityLevel === "" && isError && (
                            <p className="text-secondary">
                                Please choose your activity level
                            </p>
                        )}
                    </div>
                    <fieldset>
                        <legend className="mb-3">What is your goal?</legend>
                        <div className="relative grid grid-cols-3 bg-[#f3f3f3] rounded-full">
                            {["Lose", "Maintain", "Gain"].map((goalOptions) => (
                                <label
                                    key={goalOptions}
                                    className={`cursor-pointer px-7 py-3 text-center text-third font-medium ${
                                        goal === goalOptions
                                            ? "bg-primary-background"
                                            : ""
                                    } rounded-full transition-colors duration-300`}
                                >
                                    <input
                                        className="absolute opacity-0"
                                        type="radio"
                                        name="goal"
                                        value={goalOptions}
                                        checked={goal === goalOptions}
                                        onChange={() => setGoal(goalOptions)}
                                    />
                                    {goalOptions}
                                </label>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend className="mb-3">
                            How fast do you want to reach your goal?
                        </legend>
                        <div className="relative grid grid-cols-3 bg-[#f3f3f3] rounded-full">
                            {["Mild", "Moderate", "Aggressive"].map(
                                (intensityOptions) => (
                                    <label
                                        key={intensityOptions}
                                        className={`cursor-pointer px-7 py-3 text-center text-third font-medium ${
                                            intensity === "Aggressive"
                                                ? "last-of-type:text-white last-of-type:bg-secondary"
                                                : ""
                                        } ${
                                            intensity === intensityOptions
                                                ? "bg-primary-background"
                                                : ""
                                        } rounded-full transition-colors duration-300`}
                                    >
                                        <input
                                            className="absolute opacity-0"
                                            type="radio"
                                            name="intensity"
                                            value={intensityOptions}
                                            checked={
                                                intensity === intensityOptions
                                            }
                                            onChange={() =>
                                                setIntensity(intensityOptions)
                                            }
                                        />
                                        {intensityOptions}
                                    </label>
                                )
                            )}
                        </div>
                    </fieldset>
                    <button
                        className="cursor-pointer flex gap-2 justify-center items-center px-8 py-4 w-full text-normal-size text-white font-medium bg-primary rounded-full"
                        onClick={calculateBMR}
                    >
                        <MdCalculate />
                        <span>Calculate</span>
                    </button>
                </section>
                <section className="p-8 text-third bg-primary-background rounded-l-[6rem] 1440px:w-[min(40%,550.4px)]">
                    <h2 className="mb-8 text-center text-[2rem] font-semibold">
                        Your Daily Macro Goal
                    </h2>
                    <div>
                        <p className="text-heading02-size text-secondary text-center font-bold">
                            {formatNumber(dailyCal)}
                        </p>
                        <p className="text-third text-medium-size text-center">
                            kcal
                        </p>
                    </div>
                    <section className="mb-8 ">
                        <h3 className="mb-8 text-normal-size font-medium">
                            Daily Macro
                        </h3>
                        <section className="1440px:grid 1440px:gap-4 1440px:grid-cols-3">
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
                    <section className="1440px:grid 1440px:gap-4 1440px:grid-cols-2">
                        {[
                            {
                                label: `Total Calories to ${
                                    goal === "Lose"
                                        ? "Lose"
                                        : goal === "Maintain"
                                        ? "Maintain"
                                        : "Gain"
                                }`,
                                value: totalCal,
                            },
                            { label: "Estimated Days", value: estimatedDays },
                        ].map(({ label, value }) => (
                            <div
                                key={label}
                                className="px-4 py-8 text-center bg-white rounded-2xl"
                            >
                                <p className="mb-4 text-primary text-[2rem] font-semibold">
                                    {formatNumber(value)}
                                </p>
                                <p className="text-grey">{label}</p>
                            </div>
                        ))}
                    </section>
                </section>
            </div>
        </main>
    );
}
