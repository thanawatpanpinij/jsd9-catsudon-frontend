import React, { useState } from "react";
import MenuCard from "../shared-component/MenuCard";
import { menus } from "../../utils/data/menus";
import { LuListFilter } from "react-icons/lu";
import { GiAchievement } from "react-icons/gi";

// เอาไว้แมป key => category name ที่ใช้ใน menus
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

// ข้อมูล category
const categories = [
  {
    label: "ALL MENU",
    key: "all",
    icon: <img src="../public/allmenu.png" alt="allmenu" className="w-8" />,
  },
  {
    label: "Clean Eating",
    key: "clean",
    icon: <img src="../public/cleanfood.png" alt="cleaneat" className="w-8" />,
  },
  {
    label: "Keto Diet",
    key: "keto",
    icon: <img src="../public/keto.png" alt="keto" className="w-8" />,
  },
  {
    label: "Vegetarian",
    key: "vegetarian",
    icon: (
      <img src="../public/vegetarian.png" alt="vegetarian" className="w-8" />
    ),
  },
  {
    label: "Vegan",
    key: "vegan",
    icon: <img src="../public/vegan.png" alt="vegan" className="w-8" />,
  },
  {
    label: "Plant Based",
    key: "plant",
    icon: (
      <img src="../public/plantbase.png" alt="plantbased" className="w-8" />
    ),
  },
  {
    label: "High Protein",
    key: "protein",
    icon: <img src="../hightprotein.png" alt="hightprotein" className="w-8" />,
  },
  {
    label: "Low Carb",
    key: "lowcarb",
    icon: <img src="../public/lowcarb.png" alt="lowcarb" className="w-8" />,
  },
  {
    label: "Gluten Free",
    key: "glutenfree",
    icon: (
      <img src="../public/glutenfree.png" alt="glutenfree" className="w-8" />
    ),
  },
];

// ฟังก์ชันนับจำนวนเมนูตามหมวด
const getCountByCategory = (key) => {
  if (key === "all") {
    return menus.length;
  }
  const categoryName = categoryMap[key];
  return menus.filter((menu) => menu.category === categoryName).length;
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
    <div className="bg-white min-h-screen font-poppins">
      <div className="max-w-[1440px] px-[32px] mx-auto">
        {/* Banner */}
        <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700">
          Explore <span className="text-orange-500 mx-2">Culinary</span>{" "}
          Insights
        </div>

        {/* Filter Tabs */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:justify-center py-4">
            {categories.map((cat) => (
              <div
                key={cat.key}
                onClick={() => {
                  setActiveTab(cat.key);
                  setShowAll(false);
                }}
                className={`flex flex-col items-center justify-center px-2 py-3 rounded-xl text-center cursor-pointer transition duration-200 min-w-[110px] ${
                  activeTab === cat.key
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-[var(--color-primary)] hover:text-white"
                }`}
              >
                <div className="w-6 h-6">{cat.icon}</div>
                <div className="font-semibold mt-1 text-xs">{cat.label}</div>
                <div className="text-[10px]">
                  {getCountByCategory(cat.key)} ITEMS
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-[var(--color-primary)] text-2xl">
              <GiAchievement size={40} />
            </span>{" "}
            Explore Our Menus
          </h2>
          <div className="text-sm bg-green-100 text-green-800 px-4 py-1 rounded-full cursor-pointer">
            MunuFilter <LuListFilter />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-6 justify-items-center">
          {visibleMenu.map((menu) => (
            <div key={menu.id} className="w-full max-w-[280px]">
              <MenuCard menu={menu} />
            </div>
          ))}
        </div>

        {/* View More */}
        {!showAll && visibleMenu.length < filteredMenus.length && (
          <div className="text-center pb-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[var(--color-primary)] hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full"
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
