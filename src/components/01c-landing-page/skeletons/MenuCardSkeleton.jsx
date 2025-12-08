import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function MenuCardSkeleton() {
  return (
    <Swiper
      className="w-[1900px] h-full"
      slidesPerView={6}
      spaceBetween={0}
      loop={true}
      allowTouchMove={false}
    >
      {[...Array(6)].map((_, index) => (
        <SwiperSlide key={index}>
          <div className="w-[300px] border-[1.5px] border-gray-300 p-5 rounded-[32px] flex flex-col justify-center gap-4 bg-white">
            {/* Header: Tag badge + Heart icon */}
            <div className="flex items-center justify-between">
              <div className="w-[60px] h-[20px] bg-[#f0efed] rounded-full animate-pulse"></div>
              <div className="w-[20px] h-[20px] bg-[#f0efed] rounded-full animate-pulse"></div>
            </div>

            {/* Image skeleton */}
            <div className="w-full h-[160px] bg-[#f0efed] rounded-[18px] overflow-hidden animate-pulse">
              <div className="w-full h-full bg-[#e9e9e9] animate-pulse"></div>
            </div>

            {/* Tags skeleton */}
            <div className="flex text-[10px] items-center gap-1">
              {[...Array(3)].map((_, tagIndex) => (
                <div
                  key={tagIndex}
                  className="w-[40px] h-[16px] bg-[#f0efed] rounded-full animate-pulse"
                ></div>
              ))}
            </div>

            {/* Category name skeleton */}
            <div className="w-[80px] h-[12px] bg-[#f0efed] rounded-full animate-pulse"></div>

            {/* Menu name skeleton */}
            <div className="w-full h-[16px] bg-[#f0efed] rounded-full animate-pulse mb-1"></div>
            <div className="w-[70%] h-[16px] bg-[#f0efed] rounded-full animate-pulse"></div>

            {/* Rating skeleton */}
            <div className="flex items-center gap-1 mt-1">
              {[...Array(4)].map((_, starIndex) => (
                <div
                  key={starIndex}
                  className="w-[12px] h-[12px] bg-[#f0efed] rounded-full animate-pulse"
                ></div>
              ))}
              <div className="w-[40px] h-[12px] bg-[#f0efed] rounded-full animate-pulse ml-1"></div>
            </div>

            {/* Footer: Price + Button */}
            <div className="flex items-center justify-between">
              <div className="w-[80px] h-[20px] bg-[#f0efed] rounded-full animate-pulse"></div>
              <div className="w-[40px] h-[40px] bg-[#f0efed] rounded-full animate-pulse"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MenuCardSkeleton;
