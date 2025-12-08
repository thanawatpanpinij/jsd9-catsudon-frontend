import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CategoryCardSkeleton() {
  return (
    <Swiper
      className="w-full"
      spaceBetween={16}
      loop={true}
      allowTouchMove={false}
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
      {[...Array(8)].map((_, index) => (
        <SwiperSlide key={index} className="text-center">
          {/* Image skeleton */}
          <div className="relative overflow-hidden w-full rounded-[32px] mb-3 max-[390px]:rounded-[24px] aspect-square bg-[#f0efed] animate-pulse">
            <div className="w-full h-full bg-[#e9e9e9] animate-pulse"></div>
          </div>
          {/* Category name skeleton */}
          <div className="w-[60px] h-[12px] mx-auto bg-[#e9e9e9] rounded-full animate-pulse"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoryCardSkeleton;
