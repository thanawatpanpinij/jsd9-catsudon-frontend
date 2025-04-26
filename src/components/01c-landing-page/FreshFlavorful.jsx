import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { RiArrowDownSLine } from "react-icons/ri";

const FreshFlavorful = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Healthy Cruciferous",
      description:
        "Cruciferous vegetables belong to the Brassicaceae family and include vegetables such as broccoli, cauliflower, cabbage, Brussels sprouts, kale, and others.",
    },
    {
      title: "Fresh Root Vegetables",
      description:
        "Root vegetables like carrots, sweet potatoes, and beets are rich in nutrients and fiber, promoting digestion and overall health. They're perfect for clean eating.",
    },
    {
      title: "Dry Fruits & Nuts",
      description:
        "Dry fruits and nuts are energy-packed, rich in healthy fats and protein. They aid muscle growth, support heart health, and provide essential vitamins and minerals for overall well-being.",
    },
    {
      title: "Organic Vegetables",
      description:
        "Organic vegetables are grown without synthetic chemicals, offering better nutrition and being healthier for both you and the environment.",
    },
    {
      title: "Natural Citrus Fruits",
      description:
        "Citrus fruits like oranges, lemons, and limes are rich in vitamin C, antioxidants, and fiber, supporting immune health and digestion.",
    },
    {
      title: "Healthy Leafy Green",
      description:
        "Leafy greens are rich in vitamins, minerals, and antioxidants, supporting digestion and immunity. Examples include spinach and kale.",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-[32px] mb-[56px]">
      <div className="mb-[32px] flex flex-col leading-tight">
        <p className="text-[10px] text-primary max-[433px]:text-[10px]">
          Handpicked for pure, delicious living.
        </p>
        <h2 className="text-[42px] font-semibold text-third max-[631px]:text-large-size max-[433px]:text-medium-size">
          Fresh & Flavorful organic goods
        </h2>
      </div>

      <div className="w-full">
        <div className="w-full grid grid-cols-2 gap-8">
          <Swiper
            className="w-full"
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            speed={800}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
          >
            <SwiperSlide>
              <img
                className="w-full h-[512px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720550/001-fresh-flavoful_gpgwlj.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[512px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720550/002-fresh-flavoful_pmqe8a.webp"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[512px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978247/003-leaf-lettuce_q3d1qs.avif"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[512px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978248/004-cherry-tomatoes_yxzerl.avif"
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <div className="bg-secondary w-full rounded-4xl p-6 flex flex-col justify-center gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-5 rounded-3xl flex flex-col transition-all duration-300 ${
                    openIndex === index ? "gap-2" : "gap-0"
                }`}
              >
                <div
                  className="flex items-center justify-between text-third cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <RiArrowDownSLine
                    className={`bg-gray-300 text-normal-size rounded-full text-white hover:bg-primary transition-all duration-300 transform ${
                      openIndex === index ? "rotate-180 bg-primary" : "rotate-0"
                    }`}
                  />
                </div>

                <div
                  className={`grid overflow-hidden transition-all duration-400 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="text-pretty text-small-size text-gray-600 overflow-hidden">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshFlavorful;
