import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { RiArrowDownSLine } from "react-icons/ri";

const FreshFlavorful = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[32px] mb-[56px]">
      <div className="mb-[32px] flex flex-col leading-tight">
        <p className="text-small-size text-primary">
          Handpicked for pure, delicious living.
        </p>
        <h2 className="text-heading02-size font-semibold text-third max-[631px]:text-heading03-size">
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
                className="w-full h-[500px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720550/001-fresh-flavoful_gpgwlj.jpg"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[500px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720550/002-fresh-flavoful_pmqe8a.webp"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[500px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978247/003-leaf-lettuce_q3d1qs.avif"
                alt=""
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="w-full h-[500px] object-cover rounded-4xl"
                src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744978248/004-cherry-tomatoes_yxzerl.avif"
                alt=""
              />
            </SwiperSlide>
          </Swiper>

          <div className="bg-secondary w-full rounded-4xl p-6">
            <div className="bg-white p-5 rounded-3xl flex flex-col gap-2">
              <div className="flex items-center justify-between text-third">
                <h3 className="font-semibold ">
                  Healthy Cruciferous
                </h3>
                <RiArrowDownSLine />
              </div>
              <p className="text-pretty text-small-size text-gray-600">
                Cruciferous vegetables belong to the Brassicaceae family and
                include vegetables such as broccoli, cauliflower, cabbage,
                Brussels sprouts, kale, and others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshFlavorful;
