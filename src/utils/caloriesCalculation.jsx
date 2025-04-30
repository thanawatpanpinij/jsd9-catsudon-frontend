function calculateBMR({ gender, age, weight, height }) {
    let bmr;

    if (gender === "Female") {
        bmr = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
    } else {
        bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    }
    return bmr;
}

function calculateTDEE(bmr, activityLevel) {
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
    return tdee;
}

function userGoal(weight, goalWeight) {
    return goalWeight < weight
        ? "Lose"
        : goalWeight > weight
        ? "Gain"
        : "Maintain";
}

function calculateDailyCal(tdee, goal, intensity) {
    const step =
        intensity === "Mild" ? 300 : intensity === "Moderate" ? 500 : 700;
    let dailyCal = tdee;
    if (goal === "Lose") {
        dailyCal = tdee - step;
    }
    if (goal === "Gain") {
        dailyCal = tdee + step;
    }
    return Math.round(dailyCal);
}

function calculateTotalCalories(weight, goalWeight) {
    if (goalWeight === 0) {
        goalWeight = weight;
    }
    const weightDiff = weight - goalWeight;
    const kcalPerKg = 7700;
    return Math.abs(weightDiff * kcalPerKg);
}

function estimateDays(goalWeight, dailyCal) {
    return Math.ceil((goalWeight * 7700) / dailyCal);
}

function calculateNutrition(dailyCal, goal) {
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
    return {
        protein: Math.round(protein / 4),
        carb: Math.round(carb / 4),
        fat: Math.round(fat / 9),
    };
}

export {
    calculateBMR,
    calculateTDEE,
    userGoal,
    calculateDailyCal,
    calculateTotalCalories,
    estimateDays,
    calculateNutrition,
};
