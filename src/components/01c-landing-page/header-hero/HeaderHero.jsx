import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper-assets/swiper-bundle.min.css";
import styles from "./HeaderHero.module.css";
import {
  RiSearch2Line,
  RiCloseLine,
  RiStarFill,
  RiArrowLeftWideLine,
  RiArrowRightWideLine,
} from "react-icons/ri";

const HeaderHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current.swiper.slidePrev();
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid">
      <section className="w-full px-[32px] max-w-[1440px] mx-auto mt-[48px]">
        <div className="flex flex-col">
          <div className="relative w-full">
            <h1 className="text-[4rem] font-bold text-third leading-15">
              <span className="absolute left-[50px]">Fresh &amp; Healthy</span>
              <br />
              <span className="absolute top-[50px] font-taprom text-primary font-light">
                With
              </span>
              <span className="absolute left-[120px]">Great Taste</span>
            </h1>

            <img
              className="w-[120px] absolute left-[370px] top-[120px]"
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720527/arrow-heading_rq35dc.png"
              alt="Arrow"
            />
          </div>

          <p className="text-normal-size text-gray-600 w-[42%] mt-[130px]">
            CalNoy – Seamless Clean Eating, Tailored for You. Eat smarter with
            personalized menus, precise calorie tracking, and effortless
            ordering—all designed for your lifestyle. Get complete nutrition
            insights and fresh, wholesome meals delivered to your door, making
            clean eating easier and more accessible than ever.
          </p>

          <div className="flex items-center mt-[32px] gap-[12px]">
            <button className="bg-primary px-7 h-[60px] rounded-full text-normal-size text-white cursor-pointer hover:bg-secondary transition-all duration-200">
              Calorie Calculator
            </button>

            <div
              className={`relative h-[60px] flex bg-white shadow-[0_4px_24px_rgba(13,12,11,0.1)] rounded-full px-4 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              ${isOpen ? "w-[26%]" : "w-[60px]"}`}
            >
              <input
                type="text"
                placeholder="Search your menu..."
                className={`w-full h-full rounded-full px-4 text-sm font-medium opacity-0 pointer-events-none transition-opacity duration-[1500ms] ${
                  isOpen ? "opacity-100 pointer-events-auto" : ""
                }`}
              />

              <button
                className={`absolute top-0 bottom-0 right-1 m-auto w-[52px] h-[52px] rounded-full grid place-items-center cursor-pointer transition-transform duration-[600ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${
                  isOpen ? "rotate-90 bg-primary" : "bg-third"
                } hover:bg-primary`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <RiCloseLine className="text-white text-[1.5rem] transition-opacity duration-500 opacity-100" />
                ) : (
                  <RiSearch2Line className="text-white text-[1.5rem] transition-opacity duration-500 opacity-100" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-[340px] mt-[40px]">
            <RiArrowLeftWideLine
              className="h-[60px] w-[60px] text-gray-500 cursor-pointer"
              onClick={handlePrevClick}
            />
            <Swiper
              ref={swiperRef}
              slidesPerView={3}
              spaceBetween={16}
              centeredSlides={true}
              loop={true}
              speed={1500}
              className="mySwiper"
            >
              {[
                { name: "Clean Eating", rating: "3.98", bgColor: "bg-third" },
                { name: "Keto Diet", rating: "3.25", bgColor: "bg-secondary" },
                { name: "Vegetarian", rating: "4.98", bgColor: "bg-third" },
                { name: "Vegan", rating: "4.45", bgColor: "bg-secondary" },
                { name: "Plant Based", rating: "4.35", bgColor: "bg-third" },
                {
                  name: "Gluten Free",
                  rating: "4.28",
                  bgColor: "bg-secondary",
                },
                { name: "Low Carb", rating: "4.58", bgColor: "bg-third" },
                {
                  name: "High-Protein",
                  rating: "4.86",
                  bgColor: "bg-secondary",
                },
              ].map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`flex justify-center items-center w-auto py-[15px] ${
                    swiperRef.current?.swiper.realIndex === index
                      ? styles.activeSlide
                      : ""
                  }`}
                >
                  <article
                    className={`flex flex-col items-center justify-center px-1 py-3 w-auto rounded-full ${item.bgColor} transition-all duration-300`}
                  >
                    <div className="bg-white rounded-full w-[65px] h-[65px] flex justify-center items-center">
                      <img
                        className="w-[65px] h-[65px] object-cover"
                        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720534/002-vector-r02_whb6bu.webp"
                        alt={item.name}
                      />
                    </div>

                    <p className="text-small-size text-white my-3 text-center">
                      {item.name}
                    </p>

                    <div className="flex items-center justify-center gap-0.5 text-small-size text-white mb-4">
                      <RiStarFill className="text-fourth" />
                      <span>{item.rating}</span>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <RiArrowRightWideLine
              className="h-[60px] w-[60px] text-gray-500 cursor-pointer"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderHero;
