import React, { useState } from "react";
import Breadcrumbs from "../../components/shared-component/Breadcrumbs.jsx";
import CaloriesCalculatorForm from "./components/CaloriesCalculatorForm.jsx";
import CaloriesResult from "./components/CaloriesResult.jsx";
import CaloriesCalculatorProvider from "./context/CaloriesCalculatorProvider.jsx";

export default function CaloriesCalculatorPage() {
  const [isError, setIsError] = useState(false);

  return (
    <main className="max-w-[1440px] mx-auto mb-16 pt-14">
      <Breadcrumbs style="mx-8 mb-8 text-[#b9b9b9] font-medium" breadcrumb={"Calories Calculator"} />
      <CaloriesCalculatorProvider>
        <div className="overflow-hidden border-[1.5px] border-bright-grey rounded-4xl shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 1440px:flex 1440px:justify-between">
          <CaloriesCalculatorForm isError={isError} setIsError={setIsError} />
          <CaloriesResult />
        </div>
      </CaloriesCalculatorProvider>
    </main>
  );
}
