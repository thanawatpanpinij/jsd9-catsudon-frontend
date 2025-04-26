import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";

const DeliveryBanner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-[32px] mb-[56px]">
      <div className="relative bg-secondary grid grid-cols-2 rounded-[32px] py-6 px-[56px] max-[721px]:px-[32px] max-[991px]:py-6 max-[721px]:grid-cols-1 min-[1019px]:py-8">
        
        {/* Left Section */}
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h3 className="text-heading03-size font-semibold leading-[1.2] text-white max-[801px]:text-medium-size max-[721px]:text-large-size min-[1200px]:text-[45px]">
              Delivery service available from 10:00 AM to 08:00 PM
            </h3>
            <p className="text-white max-[801px]:text-small-size max-[721px]:text-base">
              Free delivery for purchases over 200 THB
            </p>
          </div>

          <button className="group flex items-center justify-center bg-white w-fit py-3 px-8 max-[928px]:px-5 max-[390px]:py-2 max-[390px]:px-5 rounded-full gap-1.5 cursor-pointer hover:bg-third hover:rotate-4 transition-all duration-200 ease">
            <RiShoppingBag3Fill className="text-third text-normal-size group-hover:text-white max-[390px]:text-base" />
            <p className="text-third group-hover:text-white max-[501px]:text-small-size max-[390px]:text-[10px] max-[325px]:text-[8px]">
              Shop Now
            </p>
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720543/001-vector-r02_fs21ei.webp"
            alt="Delivery illustration"
            className="absolute w-[460px] max-w-[600px] min-[1200px]:w-[500px] min-[1362px]:w-[460px] left-[60px] bottom-[-90px] max-[769px]:bottom-[-80px] max-[1109px]:left-[0] max-[991px]:left-[-30px] max-[751px]:left-[-50px] max-[991px]:w-[430px] max-[801px]:w-[400px] max-[721px]:hidden"
          />
        </div>

      </div>
    </section>
  );
};

export default DeliveryBanner;
