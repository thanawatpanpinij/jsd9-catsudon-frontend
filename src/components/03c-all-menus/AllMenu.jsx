import React, { useState } from "react";
import MenuCart from "../shared-component/MenuCard";
import { menus } from "../../utils/data/menus";

const categories = [
  { label: "ALL MENU", key: "all", count: 38, icon: "🍽️" },
  { label: "Clean Eating", key: "clean", count: 12, icon: "🥗" },
  { label: "Keto Diet", key: "keto", count: 5, icon: "🥑" },
  { label: "Vegetarian", key: "vegetarian", count: 8, icon: "🥬" },
  { label: "Vegan", key: "vegan", count: 20, icon: "🍶" },
  { label: "Plant based", key: "plant", count: 24, icon: "🥕" },
  { label: "High-Protein", key: "protein", count: 4, icon: "🍗" },
  { label: "Low Carb", key: "lowcarb", count: 3, icon: "📉" },
  { label: "Gluten-Free", key: "glutenfree", count: 2, icon: "🚫🌾" },
];

const categoryMap = {
  clean: "Clean Eating",
  keto: "Keto Diet",
  vegetarian: "Vegetarian Nutrition",
  vegan: "Vegan Nutrition",
  plant: "Plant-based",
  protein: "High-Protein Nutrition",
  lowcarb: "Low Carb",
  glutenfree: "Gluten-Free Nutrition",
};

const AllMenus = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredMenus =
    activeTab === "all"
      ? menus
      : menus.filter((menu) => menu.category === categoryMap[activeTab]);

  const visibleMenu = showAll ? filteredMenus : filteredMenus.slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* Content Wrapper with max width */}
      <div className="max-w-[1440px] px-[32px] mx-auto">
        {/* Banner */}
        <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700">
          Explore <span className="text-orange-500 mx-2">Culinary</span> Insights
        </div>

        {/* Filter Tabs */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto sm:flex-wrap sm:justify-center py-4">
            {categories.map((cat) => (
              <div
                key={cat.key}
                onClick={() => {
                  setActiveTab(cat.key);
                  setShowAll(false);
                }}
                className={`min-w-[130px] flex-shrink-0 flex flex-col items-center justify-center px-4 py-4 rounded-2xl text-center cursor-pointer transition duration-200 ${
                  activeTab === cat.key
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white"
                }`}
              >
                <div className="text-2xl">{cat.icon}</div>
                <div className="font-semibold mt-1">{cat.label}</div>
                <div className="text-sm">{cat.count} ITEMS</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-green-600 text-2xl">🎖️</span> Explore Our Menus
          </h2>
          <div className="text-sm bg-green-100 text-green-800 px-4 py-1 rounded-full cursor-pointer">
            Savory ⬇️
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-6 justify-items-center">
          {visibleMenu.map((menu) => (
            <div key={menu.id} className="w-full max-w-[280px]">
              <MenuCart menu={menu} />
            </div>
          ))}
        </div>

        {/* View More */}
        {!showAll && visibleMenu.length < filteredMenus.length && (
          <div className="text-center pb-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full"
            >
              View more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMenus;
