import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { Pagination } from "swiper/modules";
import "../swiper-assets/swiper-bundle.min.css";
import styles from "./ClientReviews.module.css";

const reviews = [
  {
    name: "Ava Morgan",
    img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720542/001-user_qjnijn.jpg",
    rating: 4.98,
    review:
      "The quinoa salad was delicious—fresh, vibrant, and packed with nutrients. I feel light after eating it. Highly recommend for a healthy meal.",
  },
  {
    name: "Sophia Walker",
    img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720544/002-user_tcbg4g.jpg",
    rating: 4.88,
    review:
      "I tried the avocado smoothie and it’s creamy, naturally sweet, and full of healthy fats. Perfect for a quick breakfast or post-workout snack.",
  },
  {
    name: "Elijah Gray",
    img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720544/003-user_cazvk7.jpg",
    rating: 4.87,
    review:
      "The kale and quinoa bowl is amazing! Fresh kale, great texture, and the perfect balance of flavors. It's filling yet light, and leaves me feeling great.",
  },
  {
    name: "Lucas Gray",
    img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720544/003-user_cazvk7.jpg",
    rating: 4.65,
    review:
      "The grilled salmon with lemon and herbs was perfect—fresh, packed with Omega-3s, and a must-try for health-conscious seafood lovers!",
  },
  {
    name: "Alexander Hughes",
    img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720545/004-user_kfpir5.webp",
    rating: 4.85,
    review:
      "I wasn’t sure about tofu at first, but the spicy tofu bowl completely changed my mind. Full of flavor, protein-packed, and surprisingly satisfying!",
  },
  {
    name: "Benjamin Foster",
    img: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720546/005-user_wlpbai.webp",
    rating: 4.85,
    review:
      "The berry chia pudding was light, refreshing, and naturally sweet. It's a perfect guilt-free dessert after a meal. Will definitely have it again!",
  },
];

const ClientReviews = () => (
  <section className="max-w-[1440px] mx-auto px-[32px] mb-[56px]">
    <Swiper
      className="w-full h-[315px]"
      slidesPerView={6}
      spaceBetween={16}
      loop={true}
      speed={800}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${styles.paginationBullet} ${className}"></span>`;
        },
      }}
      breakpoints={{
        300: { slidesPerView: 1 },
        641: { slidesPerView: 2 },
        769: { slidesPerView: 3 },
        1040: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      }}
    >
      {reviews.map(({ name, img, rating, review }, index) => (
        <SwiperSlide
          key={index}
          className=" bg-gray-100 px-5 py-8 rounded-[32px]"
        >
          <div className="flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-1 text-fourth">
                {[...Array(5)].map((_, i) =>
                  i < Math.floor(rating) ? (
                    <RiStarFill key={i} />
                  ) : (
                    <RiStarLine key={i} />
                  )
                )}
              </div>
              <span className="text-third text-small-size font-medium">
                ({rating.toFixed(2)})
              </span>
            </div>

            <div>
              <p className="flex-grow text-center text-gray-700 text-small-size max-[641px]:text-[14px]">
                {review}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={img}
                alt={name}
                loading="lazy"
              />
              <p className="text-small-size text-gray-700 font-medium">
                {name}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default ClientReviews;
