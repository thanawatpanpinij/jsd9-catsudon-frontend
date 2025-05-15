import React, { useContext } from "react";
import Breadcrumbs from "../../components/shared-component/Breadcrumbs.jsx";
import CaloriesCalculatorForm from "./components/CaloriesCalculatorForm.jsx";
import CaloriesResult from "./components/CaloriesResult.jsx";
import InitialResult from "./components/InitialResult.jsx";
import { CaloriesCalculatorContext } from "./context/CaloriesCalculatorContext.jsx";

export default function CaloriesCalculatorPage() {
  const { state } = useContext(CaloriesCalculatorContext);
  return (
    <main className="max-w-[1440px] mx-auto pt-14 1023px:mb-16">
      <Breadcrumbs
        style="mx-8 mb-8 text-[#b9b9b9] font-medium"
        breadcrumb={"Calories Calculator"}
      />
      <div className="overflow-hidden 1023px:mx-8 1023px:border-[1.5px] 1023px:border-bright-grey 1023px:rounded-4xl 1023px:rounded-r-[5rem] 1023px:shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 1440px:flex 1440px:justify-between">
        <CaloriesCalculatorForm />
        {state.showResult ? <CaloriesResult /> : <InitialResult />}
      </div>
    </main>
  );
}
