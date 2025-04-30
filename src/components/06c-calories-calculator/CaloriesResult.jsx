import React from 'react'

export default function CaloriesResult() {
    return (
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
                        label: `Total Calories to ${goal === "Lose"
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
    )
}
