import React from "react";

const FarmFreshMenus = () => {
  return (
    <section className="flex flex-col max-w-[1440px] mx-auto px-[32px] mb-[56px]">
      <div className="mb-[32px]">
        <div className="flex flex-col leading-tight">
          <p className="text-[10px] text-primary">
            Organic goodness in every bite.
          </p>
          <div className="flex items-center justify-between max-[482px]:flex-col  max-[482px]:items-start">
            <h2 className="text-[42px] font-semibold text-third max-[631px]:text-large-size max-[433px]:text-medium-size">
              Farm fresh menus
            </h2>
            <button className="bg-primary rounded-full px-5 py-1.5 text-white text-small-size max-[482px]:mt-4 hover:bg-third transition-all duration-200 ease cursor-pointer">
              All Menus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmFreshMenus;
