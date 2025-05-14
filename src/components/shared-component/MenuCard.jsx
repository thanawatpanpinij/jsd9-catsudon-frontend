import React, { useState } from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";
import { Link } from "react-router";

const MenuCard = ({ menu }) => {
  const { _id, name, slug, price, imageUrl, tags, dietary } = menu;
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-[290px] rounded-[32px] border-[1.5px] p-5 border-gray-300  bg-white relative ">
      {/* Top row: Hot label + Heart icon */}
      <div className="flex justify-between items-center mb-3">
        <div className="bg-[var(--color-secondary)] text-white text-sm px-3 py-0.5 rounded-full">
          Hot
        </div>
        <button onClick={toggleLike}>
          {liked ? (
            <IoIosHeart size={25} color="#d94343" />
          ) : (
            <IoIosHeart size={25} color="#bab4b4" />
          )}
        </button>
      </div>

      {/* Image */}
      <Link to={`${slug}-${_id}`}>
        <div className="w-full h-[160px]  bg-gray-100 rounded-[18px] flex items-center justify-center text-sm text-gray-600 overflow-hidden  ">
          <img
            src={imageUrl}
            alt={name}
            className="w-full object-cover transition-transform duration-200 hover:scale-[1.1]"
          />
        </div>
      </Link>

      {/* Tags */}
      <div className="flex gap-1 mt-3 mb-2">
        {tags?.en.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="flex justify-center border border-orange-500 text-orange-500 text-[10px] px-1.5 py-0.5 rounded-full whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Dietary Label */}
      {dietary?.[0] && (
        <div className="text-green-600 text-sm  font-medium mt-3 mb-1">
          {dietary[0]
            .replace("-", " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())}
        </div>
      )}

      {/* Title */}
      <Link to={`${slug}-${_id}`}>
        <div className="text-black font-semibold text-normal-size  text-lg mb-2 line-clamp-2 overflow-hidden min-h-[3.5rem]">
          {name}
        </div>
      </Link>

      {/* Rating */}
      <div className="flex items-center text-sm mb-3">
        <span className="text-yellow-400 text-lg">★ ★ ★ ★ ☆</span>
        <span className="ml-2 text-gray-600 text-sm font-medium">(4.5)</span>
      </div>

      {/* Price & Cart button */}
      <div className="flex items-center justify-between">
        <span className="text-black font-semibold text-medium-size ">
          {price}.00 THB
        </span>
        <button className="bg-[var(--color-primary)] hover:bg-green-900  hover:rotate-6 text-white p-2 w-10 h-10 rounded-full text-lg flex items-center justify-center">
          <RiShoppingBag3Fill className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
