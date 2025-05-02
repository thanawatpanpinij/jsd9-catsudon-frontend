import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdCalculate } from "react-icons/md";
import { CaloriesCalculatorContext } from "../context/CaloriesCalculatorContext.jsx";

export default function CaloriesCalculatorForm({ setStartCount }) {
  const { state, setGender, setAge, setWeight, setHeight, setGoalWeight, setActivityLevel, setIntensity, calculateAll } = useContext(CaloriesCalculatorContext);
  const [isError, setIsError] = useState(false);

  function handleOnClick() {
    if (!state.age || !state.weight || !state.height || !state.activityLevel) {
      return setIsError(true);
    }
    setIsError(false);
    calculateAll();
    setStartCount(true);
  }

  return (
    <section className="grid gap-4 p-8 text-grey 576px:flex 576px:flex-col 1440px:justify-between 1440px:w-[60%]">
      <h1 className="text-third text-large-size font-semibold">Calculate Your Calories</h1>
      <section className="grid gap-4 576px:flex">
        <fieldset className="576px:w-[50%]" aria-label="Gender selection">
          <legend className="mb-3">I'm a</legend>
          <div className="relative grid grid-cols-2 bg-[#f3f3f3] rounded-full">
            {["Male", "Female"].map((genderOptions) => (
              <label
                key={genderOptions}
                className={`cursor-pointer px-7 py-3 text-center text-third font-medium ${state.gender === genderOptions ? "bg-primary-background" : ""} rounded-full transition-colors duration-300`}
              >
                <input className="absolute opacity-0" type="radio" name="gender" value={genderOptions} checked={state.gender === genderOptions} onChange={() => setGender(genderOptions)} />
                {genderOptions}
              </label>
            ))}
          </div>
        </fieldset>
        <label className="576px:w-[50%]">
          Age
          <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
            <input
              className={`w-full px-4 py-3 ${state.age ? "text-third" : ""} focus:not-placeholder-shown:text-third rounded-full`}
              type="number"
              placeholder="Your age"
              value={state.age}
              min={0}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
          </div>
          {!state.age && isError && <p className="text-secondary">Please enter your age</p>}
        </label>
      </section>
      <section className="grid gap-4 576px:flex">
        <label className="576px:w-[50%]">
          Weight (kg)
          <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
            <input
              className={`w-full px-4 py-3 ${state.weight ? "text-third" : ""} focus:not-placeholder-shown:text-third rounded-full`}
              type="number"
              placeholder="Your weight"
              value={state.weight}
              min={0}
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
          </div>
          {!state.weight && isError && <p className="text-secondary">Please enter your weight</p>}
        </label>
        <label className="576px:w-[50%]">
          Height (cm)
          <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
            <input
              className={`w-full px-4 py-3 ${state.height ? "text-third" : ""} focus:not-placeholder-shown:text-third rounded-full`}
              type="number"
              placeholder="Your height"
              value={state.height}
              min={0}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          {!state.height && isError && <p className="text-secondary">Please enter your height</p>}
        </label>
      </section>
      <section className="grid gap-4 767px:flex">
        <label className="767px:w-[50%]">
          Goal Weight (kg)
          <div className="mt-3 mb-2 border border-[#b9b9b9] rounded-full">
            <input
              className={`w-full px-4 py-3 ${state.goalWeight ? "text-third" : ""} focus:not-placeholder-shown:text-third rounded-full`}
              title="hello"
              type="number"
              placeholder="Your goal weight"
              value={state.goalWeight}
              min={0}
              onChange={(event) => {
                setGoalWeight(event.target.value);
              }}
            />
          </div>
        </label>
        <div className="767px:w-[50%]">
          <label className="relative">
            Activity Level
            <select
              className="appearance-none w-full mt-3 mb-2 px-4 py-3 text-third border border-[#b9b9b9] rounded-full 1440px:block"
              name="activity-level"
              value={state.activityLevel}
              onChange={(event) => {
                setActivityLevel(event.target.value);
              }}
            >
              <option value="" disabled>
                --Choose your activity level--
              </option>
              <option value="Sedentary (office job)">Sedentary (office job)</option>
              <option value="Light Exercise (1-2 days/week)">Light Exercise (1-2 days/week)</option>
              <option value="Moderate Exercise (3-5 days/week)">Moderate Exercise (3-5 days/week)</option>
              <option value="Heavy Exercise (6-7 days/week)">Heavy Exercise (6-7 days/week)</option>
              <option value="Athlete (2 times/day)">Athlete (2 times/day)</option>
            </select>
            <IoIosArrowDown className="absolute right-4 bottom-[25%] translate-y-[25%]" />
          </label>
          {!state.activityLevel && isError && <p className="text-secondary">Please choose your activity level</p>}
        </div>
      </section>
      <fieldset>
        <legend className="mb-3">How fast do you want to reach your goal?</legend>
        <div className="relative grid grid-cols-1 mb-2 bg-[#f3f3f3] rounded-3xl 576px:grid-cols-3 576px:rounded-full">
          {["Mild", "Moderate", "Aggressive"].map((intensityOptions) => (
            <label
              key={intensityOptions}
              className={`${!state.goalWeight ? "cursor-not-allowed text-grey" : "cursor-pointer text-third"} px-7 py-3 text-center font-medium ${
                state.intensity === "Aggressive" ? "last-of-type:text-white last-of-type:bg-secondary" : ""
              } ${state.intensity === intensityOptions && state.goalWeight ? "bg-primary-background" : ""} rounded-full transition-colors duration-300`}
            >
              <input
                className="absolute opacity-0"
                title="Hello"
                type="radio"
                name="intensity"
                value={intensityOptions}
                checked={state.intensity === intensityOptions}
                onChange={() => setIntensity(intensityOptions)}
                disabled={!state.goalWeight}
              />
              {intensityOptions}
            </label>
          ))}
        </div>
        {!state.goalWeight && <p className="text-third">We'll assume you want to maintain your weight unless you enter a goal weight 😊</p>}
      </fieldset>
      <button className="cursor-pointer flex gap-2 justify-center items-center px-8 py-4 w-full text-normal-size text-white font-medium bg-primary rounded-full" onClick={handleOnClick}>
        <MdCalculate />
        <span>Calculate</span>
      </button>
    </section>
  );
}
