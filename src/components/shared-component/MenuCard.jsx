import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const MenuCart = ({ menu }) => {
  const { name, price, imageUrl, tags, dietary } = menu;
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-[250px] rounded-2xl border border-gray-200 p-4 shadow bg-white relative">
      {/* Top row: Hot label + Heart icon */}
      <div className="flex justify-between items-center mb-2">
        <div className="bg-red-500 text-white text-sm px-3 py-0.5 rounded-full">
          Hot
        </div>
        <button onClick={toggleLike}>
          {liked ? (
            <IoIosHeart size={25} color="red" />
          ) : (
            <IoIosHeartEmpty size={25} color="gray" />
          )}
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-[120px] bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600 overflow-hidden ">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3 mb-2">
        {tags?.en.map((tag) => (
          <span
            key={tag}
            className="border border-orange-500 text-orange-500 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Dietary Label */}
      {dietary?.[0] && (
        <div className="text-green-600 text-sm font-medium mb-1">
          {dietary[0]
            .replace("-", " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())}
        </div>
      )}

      {/* Title */}
      <div className="text-black font-bold text-lg mb-2">{name}</div>

      {/* Rating */}
      <div className="flex items-center text-sm mb-3">
        <span className="text-yellow-400 text-lg">★ ★ ★ ★ ☆</span>
        <span className="ml-2 text-gray-600 text-sm font-medium">(4.5)</span>
      </div>

      {/* Price & Cart button */}
      <div className="flex items-center justify-between">
        <span className="text-black font-bold text-xl">{price}.00 THB</span>
        <button className="bg-[var(--color-primary)] hover:bg-green-700 text-white p-2 w-10 h-10 rounded-full text-lg flex items-center justify-center">
          <FiShoppingBag />
        </button>
      </div>
    </div>
  );
};

export default MenuCart;
