import React, { useState } from "react";

const PromotionBanner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      src: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978126/003-spinach_zpvb62.avif",
      text: "Nourish your body, energize your life with fresh, wholesome foods.",
    },
    {
      src: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978126/002-cherry-tomatoes_yjru4p.avif",
      text: "Eat clean, feel amazing discover the power of real food.",
    },
    {
      src: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978125/001-lettuce_fafkpb.avif",
      text: "Healthy eating made simple because you deserve the best.",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-[32px] mb-[56px]">
      <div className="flex items-center gap-5  max-[648px]:gap-3 h-[230px] cursor-pointer">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative h-full overflow-hidden rounded-[32px] transition-all duration-600
              ${hoveredIndex === index ? "flex-[3] max-[335px]:flex-[5]" : "flex-1"}
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img className="w-full h-full object-cover" src={item.src} loading="lazy"/>

            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-600
                ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
              `}
            />

            <p
              className={`absolute top-8 right-5 left-8 text-3xl font-semibold text-white leading-tight z-10 transition-opacity duration-600 max-[648px]:text-medium-size max-[451px]:text-normal-size max-[376px]:text-base
                ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
              `}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionBanner;
