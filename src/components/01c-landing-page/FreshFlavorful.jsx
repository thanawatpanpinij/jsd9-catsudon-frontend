import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { RiArrowDownSLine } from "react-icons/ri";

const FreshFlavorful = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-[1440px] mx-auto px-[32px] mb-[56px]"
    >
      <div className="mb-[32px] flex flex-col leading-tight">
        <p className="text-small-size whitespace-nowrap text-primary max-[433px]:text-[10px]">
          Handpicked for pure, delicious living.
        </p>
        <h2 className="text-[42px] font-semibold text-third max-[631px]:text-large-size max-[433px]:text-medium-size">
          Fresh & Flavorful organic goods
        </h2>
      </div>

      <div className="w-full">
        <div className="w-full flex gap-5 max-[577px]:gap-3">
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
            {[ 
              "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720550/001-fresh-flavoful_gpgwlj.jpg",
              "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720550/002-fresh-flavoful_pmqe8a.webp",
              "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978247/003-leaf-lettuce_q3d1qs.avif",
              "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978248/004-cherry-tomatoes_yxzerl.avif"
            ].map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-[464px] object-cover rounded-4xl max-[740px]:h-[344px] max-[558px]:h-[320px] max-[472px]:h-[200px] max-[472px]:rounded-2xl max-[558px]:rounded-3xl"
                  src={src}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="bg-secondary w-full h-fit rounded-4xl p-6 flex flex-col gap-4 max-[472px]:gap-2 max-[558px]:p-3 max-[472px]:p-2 max-[472px]:rounded-2xl max-[558px]:rounded-3xl">
            {items.map((item, index) => (
              <div
                key={index}
                className={`item-container bg-white p-4 rounded-2xl flex flex-col transition-all duration-300 max-[740px]:p-2 max-[472px]:pr-1 max-[472px]:py-1 ${openIndex === index ? "gap-2" : "gap-0"}`}
              >
                <div
                  className="flex items-center justify-between text-third cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="font-semibold max-[740px]:text-small-size max-[472px]:text-[10px] max-[441px]:text-[8px] max-[356px]:text-[6.5px]">
                    {item.title}
                  </h3>
                  <RiArrowDownSLine
                    className={`bg-gray-300 text-normal-size max-[472px]:text-base rounded-full text-white hover:bg-primary transition-all duration-300 transform ${
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
    </section>
  );
};

export default FreshFlavorful;
