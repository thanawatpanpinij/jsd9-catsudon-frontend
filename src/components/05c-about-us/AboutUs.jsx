import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { RiArrowRightUpLine } from "react-icons/ri";

const AboutUs = () => {
  const images = [
    "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978126/002-red-tomato-and-green-cucumber_l1odmg.avif",
    "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978125/001-fruity-salad_wrhto8.avif",
  ];

  const missions = [
    "Making clean food choices simple and accessible for everyone",
    "Supporting all lifestyles, health needs, and budgets",
    "Building your confidence in every meal with transparent, accurate information",
    "Helping you enjoy eating without stress — just health, balance, and happiness",
  ];

  useEffect(() => {
    document.title = `CalNoy | ${AboutUs.name}`;
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[32px] mb-[56px] mt-[48px]">
      {/* Section: Title */}
      <div className="flex flex-col gap-3 mb-12">
        <h1 className="text-heading01-size font-semibold text-third leading-[1] max-[683px]:text-[68px] max-[597px]:text-[60px] max-[481px]:text-[56px] max-[450px]:text-[50px] max-[406px]:text-[42px] max-[347px]:text-[34px]">
          Behind CalNoy Making Healthy Eating Simple
        </h1>
        <p className="text-primary max-[683px]:text-[14px]">
          The story of a platform built with care to make healthy eating easier
        </p>
      </div>

      {/* Section: Swiper + About us */}
      <div className="grid grid-cols-2 gap-8 mb-12 max-[768px]:grid-cols-1">
        <div className="flex gap-5 max-[577px]:gap-3">
          <Swiper
            className="w-full h-full"
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides
            loop
            speed={800}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="rounded-[32px] h-[672px] w-full object-cover object-center max-[768px]:h-[350px]"
                  src={src}
                  alt={`slide-${idx}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col items-center gap-8 justify-between">
          <div className="flex flex-col">
            <h3 className="text-large-size font-semibold text-primary border-b pb-3 mb-5 border-gray-300">
              About Us
            </h3>

            <div className="flex items-center gap-4 text-gray-600 leading-7">
              <p className="text-large-size font-medium text-third">At</p>
              <p className="max-[683px]:text-[14px] max-[597px]:text-small-size min-[768px]:text-justify">
                CalNoy, we understand that choosing and accessing the right clean
                food can be challenging.
              </p>
            </div>

            <p className="text-gray-600 leading-7 mt-5 min-[768px]:text-justify max-[683px]:text-[14px] max-[597px]:text-small-size">
              From the complexity of calculating nutrition, finding convenient
              places to buy food, health restrictions, budget concerns, to simply
              not having enough time we simplify it all. With technology, we
              offer automated menu recommendations, precise calorie calculations,
              fast ordering and delivery, and clear nutritional info making
              healthy eating easier and smarter for everyone.
            </p>
          </div>

          <img
            className="h-[320px] w-full object-cover rounded-[32px] object-center max-[1146px]:h-[280px] max-[1107px]:h-[250px] max-[987px]:h-[200px] max-[817px]:h-[170px]"
            src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978128/003-salad-bowl_brrfln.avif"
            alt="about-us-2"
          />
        </div>
      </div>

      {/* Section: Our Mission */}
      <div className="grid grid-cols-2 gap-8 max-[597px]:grid-cols-1">
        <div>
          <h2 className="text-large-size font-semibold text-primary border-b pb-3 mb-3 border-gray-300">
            Our Mission
          </h2>

          {missions.map((text, idx) => (
            <div
              key={idx}
              className="border-b pb-4 mb-4 border-gray-300 flex items-center justify-between max-[683px]:text-[14px] max-[597px]:text-small-size"
            >
              <p className="text-gray-600">{text}</p>
              <button className="bg-primary p-2 rounded-full hover:bg-third transition-all duration-200 ease-out hover:rotate-6 cursor-pointer">
                <RiArrowRightUpLine className="text-normal-size text-white" />
              </button>
            </div>
          ))}
        </div>

        {/* Section: Quote */}
        <div>
          <p className="w-full text-[70px] max-[1190px]:text-[62px] max-[967px]:text-[58px] max-[913px]:text-[53px] max-[683px]:text-[48px] max-[481px]:text-[40px] max-[347px]:text-[34px] font-semibold text-gray-100 leading-[1.1] flex flex-wrap max-[597px]:justify-center">
            <span className="hover:text-secondary duration-300 ease-in-out transition-all inline cursor-pointer">
              "
            </span>

            {"Because we believe healthy eating should be easy and for everyone."
              .split(" ")
              .map((word, index, arr) => {
                const isLast = index === arr.length - 1;
                return (
                  <span
                    key={index}
                    className="hover:text-secondary duration-300 ease-in-out transition-all mr-2 inline-block cursor-pointer"
                  >
                    {word}
                    {!isLast && " "}
                  </span>
                );
              })}

            <span className="hover:text-secondary duration-300 ease-in-out transition-all inline cursor-pointer">
              "
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;