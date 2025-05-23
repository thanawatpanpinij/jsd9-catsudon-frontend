import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../components/01c-landing-page/swiper-assets/swiper-bundle.min.css";
import {
  RiHeartFill,
  RiStarFill,
  RiStarLine,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import useCartContext from "../../contexts/cartContext/useCartContext";

const FarmFreshMenus = () => {
  const [menus, setMenus] = useState([]);
  const [likedItems, setLikedItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartContext();

  const tagOrder = ["Hot", "10% off", "New"];

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axiosInstance.get("/menus");
        const fetchedMenus = response.data.menus;

        const firstItemsByCategory = [];
        const seenCategories = new Set();

        if (Array.isArray(fetchedMenus)) {
          for (const menu of fetchedMenus) {
            if (
              !seenCategories.has(menu.category) &&
              firstItemsByCategory.length < 8
            ) {
              firstItemsByCategory.push(menu);
              seenCategories.add(menu.category);
            }
            if (firstItemsByCategory.length === 8) break;
          }
          setMenus(firstItemsByCategory);
        } else {
          console.error("Error: The fetched data is not an array");
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  const handleLike = (index) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [index]: !prevLikedItems[index],
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col max-w-[1440px] mx-auto px-[32px] mb-[80px] max-[721px]:mb-[56px]">
      <div className="mb-[32px]">
        <div className="flex flex-col leading-tight">
          <p className="text-small-size text-primary">
            Organic goodness in every bite.
          </p>
          <div className="flex items-center justify-between max-[482px]:flex-col  max-[482px]:items-start">
            <h2 className="text-[42px] font-semibold text-third max-[631px]:text-large-size max-[433px]:text-medium-size">
              Farm fresh menus
            </h2>
            <Link to={"/menus"}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-primary rounded-full px-6 py-2 text-white max-[482px]:mt-4 hover:bg-third transition-all duration-200 ease cursor-pointer"
              >
                All Menus
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <Swiper
          className="w-[1900px] h-full"
          slidesPerView={6}
          spaceBetween={0}
          loop={true}
          speed={800}
        >
          {menus.map((menu, index) => (
            <SwiperSlide key={index}>
              <div className="w-[300px] border-[1.5px] border-gray-300 p-5 rounded-[32px] flex flex-col justify-center gap-4">
                <div className="flex items-center justify-between">
                  <p
                    className={`px-4 py-1 rounded-full text-small-size text-white cursor-pointer ${
                      tagOrder[index % tagOrder.length] === "Hot"
                        ? "bg-secondary"
                        : tagOrder[index % tagOrder.length] === "New"
                        ? "bg-primary"
                        : tagOrder[index % tagOrder.length] === "10% off"
                        ? "bg-fourth"
                        : "bg-gray-500"
                    }`}
                  >
                    {tagOrder[index % tagOrder.length]}
                  </p>

                  <RiHeartFill
                    className={`text-normal-size cursor-pointer transition-colors duration-300 ${
                      likedItems[index] ? "text-secondary" : "text-gray-300"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLike(index);
                    }}
                  />
                </div>

                <Link to={`/menus/${menu.slug}-${menu._id}`}>
                  <div className="w-full h-[160px] overflow-hidden rounded-[18px]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      src={menu.imageUrl}
                      alt={menu.name}
                      loading="lazy"
                    />
                  </div>
                </Link>
                {menu.tags?.en && (
                  <div className="flex text-[10px] items-center gap-1">
                    {menu.tags.en.slice(0, 3).map((tag, index) => (
                      <p
                        key={index}
                        className="text-fourth border-fourth border-1 px-2 py-[2px] rounded-full hover:bg-fourth hover:text-white transition-all duration-200 ease-out cursor-pointer"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex flex-col">
                  <p className="text-small-size text-primary font-medium">
                    {menu.category}
                  </p>
                  <Link to={`/menus/${menu.slug}-${menu._id}`}>
                    <h3 className="font-semibold text-third leading-tight text-normal-size">
                      {menu.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 mt-1 text-fourth">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarLine />
                    <p className="text-third text-small-size font-semibold">
                      {menu.rating ? `(${menu.rating})` : "(4.98)"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-third text-medium-size font-semibold">
                    {menu.price} <span>THB</span>
                  </p>
                  <div
                    onClick={() => addToCart(menu._id)}
                    className="bg-primary p-3 rounded-full hover:bg-third transition-all duration-200 ease-out cursor-pointer hover:rotate-8"
                  >
                    <RiShoppingBag3Fill className="text-medium-size text-white" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FarmFreshMenus;
