import React, { useState } from "react";
import Breadcrumbs from "../../components/shared-component/Breadcrumbs.jsx";
import CaloriesCalculatorForm from "./components/CaloriesCalculatorForm.jsx";
import CaloriesResult from "./components/CaloriesResult.jsx";
import CaloriesCalculatorProvider from "./context/CaloriesCalculatorProvider.jsx";

export default function CaloriesCalculatorPage() {
  const [startCount, setStartCount] = useState(false);
  return (
    <main className="max-w-[1440px] mx-auto pt-14 1023px:mb-16">
      <Breadcrumbs style="mx-8 mb-8 text-[#b9b9b9] font-medium" breadcrumb={"Calories Calculator"} />
      <CaloriesCalculatorProvider>
        <div className="overflow-hidden 1023px:mx-8 1023px:border-[1.5px] 1023px:border-bright-grey 1023px:rounded-4xl 1023px:shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 1440px:flex 1440px:justify-between">
          <CaloriesCalculatorForm setStartCount={setStartCount} />
          <CaloriesResult startCount={startCount} setStartCount={setStartCount} />
        </div>
      </CaloriesCalculatorProvider>
    </main>
  );
}
