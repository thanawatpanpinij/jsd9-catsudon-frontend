import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { menus } from "../../utils/data/menus";

const ShopByCategory = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrevClick = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const firstMenusByCategory = [];

  const seenCategories = new Set();

  for (const menu of menus) {
    if (!seenCategories.has(menu.category)) {
      firstMenusByCategory.push(menu);
      seenCategories.add(menu.category);
    }
  }

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
      <div className="mb-[48px]">
        <div className="flex justify-between items-center mb-[32px]">
          <h2 className="text-heading02-size font-semibold text-third max-[631px]:text-heading03-size">
            Shop By Category
          </h2>
          <div className="flex gap-3 lg:hidden">
            <button className="bg-primary rounded-full p-2 hover:bg-third transition-all duration-200 ease cursor-pointer">
              <RiArrowLeftSLine
                onClick={handleNextClick}
                className="text-white text-normal-size"
              />
            </button>
            <button className="bg-primary rounded-full p-2 hover:bg-third transition-all duration-200 ease cursor-pointer">
              <RiArrowRightSLine
                onClick={handlePrevClick}
                className="text-white text-normal-size"
              />
            </button>
          </div>
        </div>

        <Swiper
          className="w-full"
          onSwiper={setSwiperInstance}
          spaceBetween={16}
          loop={true}
          speed={600}
          modules={[Navigation]}
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
          {firstMenusByCategory.map(({ category, imageUrl }, index) => (
            <SwiperSlide key={index} className="text-center cursor-pointer">
              <img
                className="w-full rounded-[32px] mb-3 max-[390px]:rounded-[24px]"
                src={imageUrl}
                alt={category}
                loading="lazy"
              />
              <p className="text-small-size font-semibold text-third">
                {category}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-2 gap-8 max-[843px]:grid-cols-1">
        {cardData.map(({ title, bgColor, btnColor, img }, index) => (
          <div
            key={index}
            className={`flex items-center justify-between gap-[16px] ${bgColor} p-6 rounded-[32px] max-[390px]:rounded-[24px]`}
          >
            <div className="flex flex-col gap-5">
              <h3 className="text-heading03-size font-semibold text-third leading-[1.2] w-[90%] max-[501px]:text-medium-size max-[430px]:text-normal-size max-[390px]:text-base">
                {title}
              </h3>
              <button
                className={`${btnColor} flex items-center justify-center w-fit py-3 px-8 max-[928px]:px-5 max-[390px]:py-2 max-[390px]:px-5 rounded-full gap-1.5 cursor-pointer hover:bg-third hover:rotate-4 transition-all duration-200 ease`}
              >
                <RiShoppingBag3Fill className="text-white text-normal-size max-[390px]:text-base" />
                <p className="text-white max-[501px]:text-small-size max-[390px]:text-[10px] max-[325px]:text-[8px]">Shop Now</p>
              </button>
            </div>
            <img
              className="w-full max-w-[200px] max-h-[250px] object-cover rounded-[32px] max-[501px]:w-[160px] max-[430px]:w-[120px] max-[390px]:w-[100px] max-[390px]:rounded-[24px]"
              src={img}
              alt="category"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
