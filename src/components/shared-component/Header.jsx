import React, { useState, useEffect } from "react";
import TextScroller from "./text-scroller/TextScroller";
import {
  RiArrowDownWideLine,
  RiSearch2Line,
  RiShoppingBag3Fill,
  RiHeartFill,
  RiNotification4Fill,
  RiMenuLine,
  RiCloseLine,
  RiRestaurantFill,
} from "react-icons/ri";
import { menus } from "../../utils/data/menus";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const uniqueCategories = [
      "All Categories",
      ...new Set(menus.map((menu) => menu.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const icons = [
    { icon: <RiRestaurantFill className="text-xl" />, count: null },
    { icon: <RiShoppingBag3Fill className="text-xl" />, count: 12 },
    { icon: <RiHeartFill className="text-xl" />, count: 0 },
    { icon: <RiNotification4Fill className="text-xl" />, count: 0 },
  ];

  return (
    <>
      <div
        className={`sticky top-0 z-[200] bg-white transition-shadow duration-300 ${
          showShadow ? "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]" : ""
        }`}
      >
        <TextScroller />
        {/* NavBar */}
        <div className="flex-col justify-center w-full px-[32px] bg-white max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between border-b-[1.5px] py-[12px] border-gray-300 max-[968px]:border-0">
            {/* Nav-Logo */}
            <img
              className="w-[130px]"
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720548/logo-navbar_lbsakr.png"
              alt="logo"
            />

            {/* Search Area Container */}
            <div className="relative w-[500px] hidden min-[969px]:block">
              <div className="flex items-center border-[1.5px] border-gray-300 rounded-full overflow-hidden">
                <input
                  type="text"
                  placeholder="Search For Menu..."
                  className="flex-1 px-4 py-2.5 text-gray-700 outline-none text-small-size"
                />

                {/* Dropdown Button */}
                <div
                  className="flex items-center gap-1 px-1 text-small-size font-medium-weight text-third cursor-pointe"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {selectedCategory}
                  <RiArrowDownWideLine
                    className={`transition-transform duration-300
              ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </div>

                {/* Search Icon */}
                <button className="bg-third text-white p-2 rounded-full mr-[3px] hover:bg-primary transition-all duration-100 ease">
                  <RiSearch2Line />
                </button>
              </div>

              {/* Dropdown Menu - outside of input box */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-[180px] bg-white border border-gray-200 rounded-md shadow-md z-50">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      onClick={() => handleCategorySelect(category)}
                      className="cursor-pointer px-4 py-2 text-small-size font-medium-weight text-third hover:bg-green-100"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Nav Buttons */}
            <div className="hidden min-[969px]:flex items-center gap-5">
              {/* Individual Icon Buttons */}
              <div className="flex gap-2">
                <div className="relative">
                  <div className="bg-primary p-2 rounded-full text-white hover:text-gray-500 hover:bg-gray-300 transition-all duration-200 ease cursor-pointer">
                    <RiShoppingBag3Fill className="text-normal-size" />
                  </div>
                  <span className="absolute top-[-4px] right-0 w-[16px] h-[16px] bg-secondary text-white text-[10px] flex items-center justify-center rounded-full">
                    0
                  </span>
                </div>

                <div className="relative">
                  <div className="bg-primary p-2 rounded-full text-white hover:text-gray-500 hover:bg-gray-300 transition-all duration-200 ease cursor-pointer">
                    <RiHeartFill className="text-normal-size" />
                  </div>
                  <span className="absolute top-[-4px] right-0 w-[16px] h-[16px] bg-secondary text-white text-[10px] flex items-center justify-center rounded-full">
                    0
                  </span>
                </div>

                <div className="relative">
                  <div className="bg-primary p-2 rounded-full text-white hover:text-gray-500 hover:bg-gray-300 transition-all duration-200 ease cursor-pointer">
                    <RiNotification4Fill className="text-normal-size" />
                  </div>
                  <span className="absolute top-[-4px] right-0 w-[16px] h-[16px] bg-secondary text-white text-[10px] flex items-center justify-center rounded-full">
                    0
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="bg-primary text-white rounded-full px-[24px] py-[5px]  hover:bg-secondary transition-all duration-300 ease-in-out"
              >
                Sign In
              </a>
            </div>
            <div
              className="hidden max-[968px]:block w-7 cursor-pointer text-medium-size text-third"
              onClick={() => setShowMobileMenu(true)}
            >
              <RiMenuLine />
            </div>
          </div>

          <div className="hidden min-[969px]:block">
            <ul className="group flex items-center gap-1 py-[12px] text-third font-medium-weight w-fit">
              <li className="px-5 py-1 rounded-full bg-primary text-white transition-all duration-300 ease hover:bg-primary hover:text-white group-hover:bg-transparent group-hover:text-third">
                <a href="">Home</a>
              </li>

              {["All Menus", "About Us", "Health Blog", "Contact Us"].map(
                (label, index) => (
                  <li key={index}>
                    <a
                      href=""
                      className="transition-all duration-300 ease hover:bg-primary hover:text-white px-5 py-1 rounded-full"
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ------------------------ Mobile Menu ------------------------ */}
          <div
            className={`hidden max-[968px]:block ${
              showMobileMenu ? "fixed w-[60%]" : "h-0 w-0"
            } right-0 top-0 bottom-0 overflow-hidden bg-third transition-all duration-200 z-200`}
          >
            <div className="flex justify-end p-6 cursor-pointer text-medium-size text-white">
              <RiCloseLine onClick={() => setShowMobileMenu(false)} />
            </div>

            <ul className="flex flex-col items-start gap-5 mt-5 mx-[32px] text-white text-small-size">
              {[
                "Home",
                "All Menus",
                "About Us",
                "Health Blog",
                "Contact Us",
              ].map((label, index) => (
                <li key={index}>
                  <a
                    onClick={() => setShowMobileMenu(false)}
                    href="#"
                    className="inline-block hover:translate-x-2 hover:text-primary transition-all duration-300 ease"
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#"
                  onClick={() => setShowMobileMenu(false)}
                  className="bg-primary text-white rounded-full px-[24px] py-[5px] inline-block hover:bg-secondary transition-all duration-300 ease-in-out"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------ Mobile Bottom Menu ------------------------ */}

      <div className="hidden max-[968px]:flex cursor-pointer fixed bottom-0 left-0 right-0 bg-primary w-[300px] mx-auto mb-[48px] rounded-full py-3 px-5 items-center justify-around text-white z-[999]">
        {icons.map(({ icon, count }, index) => (
          <div key={index} className="relative">
            <div className="p-1.5 rounded-full text-white bg-transparent hover:bg-gray-200 hover:text-primary transition-all duration-200 ease">
              {icon}
            </div>
            {count !== null && (
              <span className="absolute top-0 right-0 w-[16px] h-[16px] bg-secondary text-white text-[10px] flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
