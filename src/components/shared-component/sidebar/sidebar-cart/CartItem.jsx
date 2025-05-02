import React from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IconContext } from "react-icons";

export default function MyCartLists() {
  return (
    <>
      <article className="flex gap-4 p-4 border-[1.5px] border-bright-grey rounded-4xl shadow-[0_0_5px_0_rgba(0,0,0,0.1)]">
        <div className="overflow-hidden max-w-[130px] rounded-4xl">
          <img className="w-full object-cover" src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720457/001-grilled-lemon-herb_i7voq4.jpg" alt="Grilled Lemon Herb" />
        </div>
        <section className="flex flex-col justify-between text-third font-semibold">
          <div>
            <p className="mb-2">Grilled Lemon Herb Chicken with Quinoa</p>
            <p className="text-grey">380 g</p>
          </div>
          <div className="flex justify-between">
            <p className="text-primary">120 THB</p>
            <div className="flex gap-4 items-center">
              <IconContext value={{ color: "var(--color-third)" }}>
                <div className="p-1 bg-bright-grey rounded-full">
                  <FiMinus />
                </div>
                <p>1</p>
                <div className="p-1 bg-bright-grey rounded-full">
                  <FaPlus />
                </div>
              </IconContext>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
