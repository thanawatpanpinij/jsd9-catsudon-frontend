import React from 'react'

export default function CaloriesCalculatorForm() {
    return (
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
                                className={`cursor-pointer px-7 py-3 text-center text-third font-medium ${gender === genderOptions
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
                            className={`w-full px-4 py-3 ${age ? "text-third" : ""
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
                            className={`w-full px-4 py-3 ${currentWeight ? "text-third" : ""
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
                            className={`w-full px-4 py-3 ${height ? "text-third" : ""
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
                            className={`w-full px-4 py-3 ${goalWeight ? "text-third" : ""
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
                            className={`cursor-pointer px-7 py-3 text-center text-third font-medium ${goal === goalOptions
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
                                className={`cursor-pointer px-7 py-3 text-center text-third font-medium ${intensity === "Aggressive"
                                    ? "last-of-type:text-white last-of-type:bg-secondary"
                                    : ""
                                    } ${intensity === intensityOptions
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
    )
}
