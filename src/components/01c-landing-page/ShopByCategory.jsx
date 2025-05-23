import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link } from "react-router";
import axiosInstance from "../../utils/axiosInstance.js";

const ShopByCategory = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [menus, setMenus] = useState([]);

  const handlePrevClick = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axiosInstance.get("/menus");

        const allMenus = response.data.menus;
        if (!Array.isArray(allMenus)) {
          throw new Error("Menus data is not an array");
        }

        const seenCategories = new Set();
        const uniqueMenus = [];

        for (const menu of allMenus) {
          if (!seenCategories.has(menu.category)) {
            uniqueMenus.push(menu);
            seenCategories.add(menu.category);
          }
          if (uniqueMenus.length === 8) break;
        }

        setMenus(uniqueMenus);
      } catch (error) {
        console.error("Failed to fetch menus:", error);
      }
    };

    fetchMenus();
  }, []);

  const cardData = [
    {
      title: "Everyday fresh & clean with our products",
      bgColor: "bg-secondary-background",
      btnColor: "bg-primary",
      img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720549/001-category_opmjjc.jpg",
    },
    {
      title: "Make your breakfast healthy and easy",
      bgColor: "bg-primary-background",
      btnColor: "bg-secondary",
      img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720553/002-category_dvaxqm.avif",
    },
  ];

  return (
    <section className="flex flex-col max-w-[1440px] mx-auto px-[32px] mb-[56px]">
      <div className="mb-[40px]">
        <div className="mb-[32px]">
          <div className="flex flex-col leading-tight">
            <p className="text-small-size text-primary">
              Browse top health categories.
            </p>
            <div className="flex items-center justify-between">
              <h2 className="text-[42px] font-semibold text-third max-[631px]:text-large-size max-[433px]:text-medium-size">
                Shop By Category
              </h2>
              <div className="flex gap-3 lg:hidden max-[461px]:gap-1">
                <button
                  className="bg-primary rounded-full p-2 hover:bg-third transition-all duration-200 ease cursor-pointer"
                  onClick={handlePrevClick}
                >
                  <RiArrowLeftSLine className="text-white text-normal-size" />
                </button>
                <button
                  className="bg-primary rounded-full p-2 hover:bg-third transition-all duration-200 ease cursor-pointer"
                  onClick={handleNextClick}
                >
                  <RiArrowRightSLine className="text-white text-normal-size" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          className="w-full"
          onSwiper={setSwiperInstance}
          spaceBetween={16}
          loop={true}
          speed={600}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {menus.map(({ category, imageUrl }, index) => (
            <SwiperSlide key={index} className="text-center cursor-pointer">
              <Link
                to={"/menus"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="relative overflow-hidden w-full rounded-[32px] mb-3 max-[390px]:rounded-[24px]">
                  <img
                    className="w-full transition-transform duration-300 hover:scale-110"
                    src={imageUrl}
                    alt={category}
                    loading="lazy"
                  />
                </div>
                <p className="text-small-size font-semibold text-third">
                  {category}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-2 gap-5 max-[843px]:grid-cols-1">
        {cardData.map(({ title, bgColor, btnColor, img }, index) => (
          <div
            key={index}
            className={`flex items-center justify-between gap-[16px] ${bgColor} p-6 rounded-[32px] max-[390px]:rounded-[24px]`}
          >
            <div className="flex flex-col gap-5">
              <h3 className="text-heading03-size font-semibold text-third leading-[1.2] w-[90%] max-[501px]:text-medium-size max-[430px]:text-normal-size max-[390px]:text-base">
                {title}
              </h3>
              <Link
                to={"/menus"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`${btnColor} flex items-center justify-center w-fit py-3 px-8 max-[928px]:px-5 max-[390px]:py-2 max-[390px]:px-5 rounded-full gap-1.5 cursor-pointer hover:bg-third hover:rotate-4 transition-all duration-200 ease`}
              >
                <RiShoppingBag3Fill className="text-white text-normal-size max-[390px]:text-base" />
                <p className="text-white max-[501px]:text-small-size max-[390px]:text-[10px] max-[325px]:text-[8px]">
                  Shop Now
                </p>
              </Link>
            </div>
            <img
              className="w-full max-w-[200px] max-h-[250px] object-cover rounded-[32px] max-[501px]:w-[160px] max-[430px]:w-[120px] max-[390px]:w-[100px] max-[390px]:rounded-[24px]"
              src={img}
              alt="category"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
