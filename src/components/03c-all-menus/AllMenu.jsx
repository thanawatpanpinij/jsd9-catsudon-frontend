import React, { useState } from "react";
import Cart from "../shared-component/MenuCard";
import { menus } from "../../utils/data/menus"; // <== แก้ path ตามที่คุณเก็บเมนูไว้

const AllMenus = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleMenu = showAll ? menus : menus.slice(0, 4); // ใช้เมนูจริง

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-700">
        Explore <span className="text-orange-500 mx-2">Culinary</span> Insights
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 overflow-x-auto p-4">
        {[
          "ALL MENU",
          "Clean Eating",
          "Keto Diet",
          "Vegetarian",
          "Vegan",
          "Plant-based",
          "High-Protein",
        ].map((label, index) => (
          <div
            key={index}
            className="px-4 py-2 rounded-full text-sm whitespace-nowrap border bg-gray-100 text-gray-700 hover:bg-green-600 hover:text-white transition duration-200 cursor-pointer"
          >
            {label}
          </div>
        ))}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-6">
        {visibleMenu.map((menu) => (
          <Cart key={menu.id} menu={menu} />
        ))}
      </div>

      {/* View More */}
      {!showAll && (
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
  );
};

export default AllMenus;
