import React, { useState, useEffect, useRef } from "react";
import MenuCard from "../shared-component/MenuCard";
import { LuListFilter } from "react-icons/lu";
import { GiAchievement } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMenuCardContext } from "../../contexts/menuCardContext/useMenuCardContext";

const categoryMap = {
  clean: "Clean Eating",
  keto: "Keto Diet",
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  plant: "Plant Based",
  protein: "High Protein",
  lowcarb: "Low Carb",
  glutenfree: "Gluten Free",
};

const categories = [
  {
    label: "All Menu",
    key: "all",
    icon: (
      <img
        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033262/allmenu_a20dwp.png"
        alt="allmenu"
        className="w-8"
      />
    ),
  },
  {
    label: "Clean Eating",
    key: "clean",
    icon: (
      <img
        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033262/cleanfood_i2543a.png"
        alt="cleaneat"
        className="w-8"
      />
    ),
  },
  {
    label: "Keto Diet",
    key: "keto",
    icon: (
      <img
        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033263/keto_oys0sl.png"
        alt="keto"
        className="w-8"
      />
    ),
  },
  {
    label: "Vegan",
    key: "vegan",
    icon: (
      <img
        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033263/vegan_e54mcz.png"
        alt="vegan"
        className="w-8"
      />
    ),
  },
  {
    label: "Vegetarian",
    key: "vegetarian",
    icon: (
      <img
        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033262/vegetarian_xbewvq.png"
        alt="vegetarian"
        className="w-8"
      />
    ),
  },
  {
    label: "Plant Based",
    key: "plant",
    icon: (
      <img
        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033263/plantbase_zv5hx0.png"
        alt="plantbased"
        className="w-8"
      />
    ),
  },
  {
    label: "High Protein",
    key: "protein",
    icon: (
      <img
        src=" https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033263/hightprotein_alc4td.png"
        alt="hightprotein"
        className="w-8"
      />
    ),
  },
  {
    label: "Low Carb",
    key: "lowcarb",
    icon: (
      <img
        src=" https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033263/lowcarb_epvihs.png"
        alt="lowcarb"
        className="w-8"
      />
    ),
  },
  {
    label: "Gluten Free",
    key: "glutenfree",
    icon: (
      <img
        src=" https://res.cloudinary.com/dsgtmtcmt/image/upload/v1746033263/glutenfree_wwvov0.png"
        alt="glutenfree"
        className="w-8"
      />
    ),
  },
];

const savoryDessertOptions = ["All", "Savory", "Dessert"];

const AllMenus = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [savoryDessertFilter, setSavoryDessertFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { menus } = useMenuCardContext();
  const dropdownRef = useRef();

  const filteredMenus = menus.filter((menu) => {
    const matchCategory =
      activeTab === "all" || menu.category === categoryMap[activeTab];
    const matchType =
      savoryDessertFilter === "All" ||
      savoryDessertFilter.toLowerCase() === (menu.type || "").toLowerCase();
    return matchCategory && matchType;
  });

  const visibleMenu = showAll ? filteredMenus : filteredMenus.slice(0, 4);

  const handleSavoryDessertSelect = (type) => {
    setSavoryDessertFilter(type);
    setDropdownOpen(false);
    setShowAll(false);
  };

  const getCountByCategory = (key) => {
    if (key === "all") {
      return menus.length;
    }
    const categoryName = categoryMap[key];
    return menus.filter((menu) => menu.category === categoryName).length;
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1440px] px-[32px] mx-auto pt-3">
        {/* Banner */}
        <div
          className="w-full h-[300px] flex items-center justify-start text-2xl font-bold text-gray-700 bg-cover bg-center px-8 rounded-2xl"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978192/005-salad-plate-on-right_yewv5d.avif')",
          }}
        >
          <div className="bg-white bg-opacity-70 px-4 py-2 rounded">
            Explore <span className="text-orange-500 mx-2">Healthy</span>{" "}
            Flavors
          </div>
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
        <div className="flex items-center justify-between px-6 pt-6 relative">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-[var(--color-primary)] text-2xl">
              <GiAchievement size={40} />
            </span>{" "}
            Explore Our Menus
          </h2>

          {/* Dropdown Button */}
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-sm bg-[var(--color-primary)] text-[var(--color-light)] px-4 py-1 rounded-full cursor-pointer flex items-center gap-2"
            >
              {savoryDessertFilter === "All"
                ? "MenuFilter"
                : savoryDessertFilter}
              <LuListFilter />
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-[150px] bg-white border border-gray-200 rounded-md shadow-md z-50">
                {savoryDessertOptions.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSavoryDessertSelect(option)}
                    className="cursor-pointer px-4 py-2 text-sm font-medium-weight hover:bg-green-100"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="px-2 py-6 overflow-x-hidden">
          {activeTab === "all" ? (
            <>
              <div className="flex flex-wrap justify-center gap-5 ">
                {menus.map((menu) => (
                  <div key={menu._id} className=" w-[300px]">
                    <MenuCard menu={menu} className="w-full" />
                  </div>
                ))}
              </div>

              {/* View More */}
              {!showAll && visibleMenu.length < filteredMenus.length && (
                <div className="text-center pt-6 pb-10">
                  <button
                    onClick={() => setShowAll(true)}
                    className="bg-[var(--color-primary)] hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full"
                  >
                    View more
                  </button>
                </div>
              )}
            </>
          ) : (
            <Swiper
              spaceBetween={16}
              loop={true}
              // slidesPerView={1}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="w-[1262px]"
            >
              {filteredMenus.map((menu) => (
                <SwiperSlide key={menu.id}>
                  <div>
                    <MenuCard menu={menu} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMenus;
