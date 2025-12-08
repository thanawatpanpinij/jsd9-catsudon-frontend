import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CategorySkeleton() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      allowTouchMove={false}
    >
      {[...Array(6)].map((_, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center items-center w-auto py-[20px]"
        >
          <article className="flex flex-col items-center justify-center max-[393px]:py-2 px-1 py-3 w-auto rounded-full bg-[#f0efed] animate-pulse transition-all duration-300">
            {/* Image circle skeleton */}
            <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center max-[393px]:w-[60px] max-[393px]:h-[60px] mb-5">
              <div className="w-[60px] h-[60px] max-[393px]:w-[45px] max-[393px]:h-[45px] rounded-full bg-[#e9e9e9] animate-pulse"></div>
            </div>

            {/* Category name skeleton */}
            <div className="w-[60px] h-[12px] max-[393px]:w-[50px] max-[393px]:h-[10px] bg-[#e9e9e9] rounded-full mb-5 animate-pulse"></div>

            {/* Rating skeleton */}
            <div className="flex items-center justify-center gap-1 mb-8">
              <div className="w-[12px] h-[12px] bg-[#e9e9e9] rounded-full animate-pulse"></div>
              <div className="w-[30px] h-[12px] bg-[#e9e9e9] rounded-full animate-pulse"></div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategorySkeleton;
