import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../swiper-assets/swiper-bundle.min.css";
import styles from "./HeaderHero.module.css";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  RiSearch2Line,
  RiCloseLine,
  RiStarFill,
  RiArrowLeftWideLine,
  RiArrowRightWideLine,
  RiShieldStarFill,
  RiArrowRightUpLine,
} from "react-icons/ri";

const HeaderHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrevClick = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <section className="grid grid-cols-2 w-full px-[32px] mb-[56px] max-w-[1440px] mx-auto mt-[48px] gap-[32px] max-[843px]:grid-cols-1 max-[843px]:justify-center">
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <div className="relative max-[843px]:text-center">
            <h1 className="text-[4rem] max-[843px]:text-[3.6rem] max-[972px]:text-[2.5rem] max-[1049px]:text-[3rem] max-[1231px]:text-[3.6rem] max-[1128px]:text-[3.3rem] font-bold text-third leading-15">
              <span className="absolute left-[50px] max-[843px]:static">
                Fresh &amp; Healthy
              </span>
              <br />
              <span className="absolute max-[843px]:static top-[50px] max-[1049px]:top-[35px] font-taprom text-primary font-light">
                With
              </span>
              <span className="absolute max-[843px]:static max-[972px]:top-[40px] max-[1128px]:top-[50px] left-[120px] max-[972px]:left-[75px] max-[1128px]:left-[100px] max-[1231px]:left-[100px] max-[1049px]:left-[85px]">
                Great Taste
              </span>
            </h1>

              <img
                className="w-[120px] max-[843px]:hidden absolute left-[370px] top-[120px] max-[972px]:left-[200px] max-[972px]:top-[95px] max-[1128px]:top-[110px] max-[1128px]:left-[290px] max-[1231px]:left-[320px] max-[1049px]:left-[250px]"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720527/arrow-heading_rq35dc.png"
                alt="Arrow"
              />
          </div>
        </div>

        <p className="text-normal-size text-gray-600 mt-[130px] max-[1001px]:text-base max-[843px]:mt-[48px] max-[972px]:mt-[100px] max-[843px]:text-center">
          CalNoy – Seamless Clean Eating, Tailored for You. Eat smarter with
          personalized menus, precise calorie tracking, and effortless
          ordering—all designed for your lifestyle. Get complete nutrition
          insights and fresh, wholesome meals delivered to your door, making
          clean eating easier and more accessible than ever.
        </p>

        <div className="flex items-center max-[843px]:flex-col mt-[50px] gap-[12px] w-full max-[843px]:w-fit">
          <button className="bg-primary px-8 py-3 rounded-full text-base text-white max-[843px]:text-base cursor-pointer hover:bg-secondary transition-all duration-200">
            Calorie Calculator
          </button>

          <div
            className={`relative h-[60px] flex bg-white shadow-[0_4px_24px_rgba(13,12,11,0.1)] rounded-full px-4 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              ${isOpen ? "w-[330px]" : "w-[60px]"}`}
          >
            <input
              type="text"
              placeholder="Search your menu..."
              className={`w-full h-full rounded-full px-4 text-sm font-medium opacity-0 border-none outline-none transition-opacity duration-[1500ms] ${
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

        <div className="flex items-center justify-center w-[400px] mt-[56px] max-[393px]:w-[320px]">
          <RiArrowLeftWideLine
            className="h-[60px] w-[60px] text-gray-500 cursor-pointer max-[301px]:hidden"
            onClick={handleNextClick}
          />
          <Swiper
            onSwiper={setSwiperInstance}
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {[
              { name: "Clean Eating", rating: "3.98", bgColor: "bg-third" },
              { name: "Keto Diet", rating: "3.25", bgColor: "bg-secondary" },
              { name: "Vegetarian", rating: "4.98", bgColor: "bg-third" },
              { name: "Vegan", rating: "4.45", bgColor: "bg-secondary" },
              { name: "Plant Based", rating: "4.35", bgColor: "bg-third" },
              { name: "Gluten Free", rating: "4.28", bgColor: "bg-secondary" },
              { name: "Low Carb", rating: "4.58", bgColor: "bg-third" },
              { name: "High-Protein", rating: "4.86", bgColor: "bg-secondary" },
            ].map((item, index) => (
              <SwiperSlide
                key={index}
                className={`flex justify-center items-center w-auto py-[20px] ${
                  swiperInstance?.realIndex === index ? styles.activeSlide : ""
                }`}
              >
                <article
                  className={`flex flex-col items-center justify-center max-[393px]:py-2 px-1 py-3 w-auto rounded-full ${item.bgColor} transition-all duration-300`}
                >
                  <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center max-[393px]:w-[55px] max-[393px]:h-[55px]">
                    <img
                      className="w-[80px] h-[80px] object-cover"
                      src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720534/002-vector-r02_whb6bu.webp"
                      alt={item.name}
                    />
                  </div>

                  <p className="text-small-size text-white my-5 text-center max-[393px]:text-[10px]">
                    {item.name}
                  </p>

                  <div className="flex items-center justify-center gap-1 text-small-size text-white mb-8">
                    <RiStarFill className="text-fourth" />
                    <span>{item.rating}</span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <RiArrowRightWideLine
            className="h-[60px] w-[60px] text-gray-500 cursor-pointer max-[301px]:hidden"
            onClick={handlePrevClick}
          />
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <div className="relative">
          <Swiper
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            centeredSlides={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Autoplay]}
            speed={1000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            <div className="flex items-center gap-2 absolute top-5 left-5 z-10 max-[321px]:left-2">
              <div className="bg-third p-2.5 rounded-full">
                <RiShieldStarFill className=" text-fourth text-medium-size" />
              </div>
              <div className="flex items-center bg-white/70 pl-5 pr-2 py-2 rounded-full gap-[16px] max-[321px]:gap-[10px] text-third font-medium-weight max-[416px]:text-small-size max-[321px]:text-[10px]">
                <p>Show Top-Rated foods</p>
                <div className="bg-third text-white rounded-full p-1.5 cursor-pointer transition-all duration-200 hover:bg-primary">
                  <RiArrowRightUpLine className=" text-white hover:rotate-6" />
                </div>
              </div>
            </div>

            <SwiperSlide>
              <img
                className="w-full rounded-[32px] object-cover h-[420px]"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720552/001-main_ee5dny.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full rounded-[32px] object-cover h-[420px]"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720554/002-main_bu66nl.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full rounded-[32px] object-cover h-[420px]"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720556/003-main_btslyw.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full rounded-[32px] object-cover h-[420px]"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720525/004-main_sp3ynq.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex items-center w-full bg-third text-white px-10 py-5 rounded-full justify-between text-normal-size max-[421px]:px-6 max-[371px]:text-small-size max-[421px]:text-base">
          <p>199+ Ratings</p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <RiStarFill className="text-fourth" key={index} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[16px]">
          <div>
            <Swiper
              spaceBetween={20}
              loop={true}
              slidesPerView={1}
              centeredSlides={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              modules={[EffectFade, Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720527/001-secondary_jc56uc.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720527/002-secondary_plzhx3.avif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720528/003-secondary_pnuwuq.webp"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720529/004-secondary_n64riv.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div>
            <Swiper
              spaceBetween={20}
              loop={true}
              slidesPerView={1}
              centeredSlides={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              modules={[EffectFade, Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720530/005-secondary_i80gmy.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720531/006-secondary_ufspbz.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720531/007-secondary_aofodb.webp"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full object-cover object-center aspect-[3/2.5] max-[569px]:aspect-[3/3] rounded-[32px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720532/008-secondary_rkj7gz.webp"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderHero;