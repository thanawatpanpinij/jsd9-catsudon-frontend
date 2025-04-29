import React from "react";
import {
  RiFacebookCircleFill,
  RiLineFill,
  RiInstagramFill,
  RiPinterestFill,
} from "react-icons/ri";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import TextScroller from "./text-scroller/TextScroller";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <footer className="bg-third text-white p-[40px] rounded-none lg:mx-[32px] lg:rounded-[32px]">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Contact Section */}
            <div>
              <div className="flex items-center gap-2 mb-[32px]">
                <img
                  className="w-[130px]"
                  src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720548/logo-footer_tqcgdg.png"
                  alt="logo"
                />
              </div>
              <ul className="space-y-6 text-base md:text-small-size lg:text-base">
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-200">
                  <MdLocationOn className="text-lg" /> Bangkok, Thailand
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-200">
                  <MdPhone className="text-lg" /> +66 5696 6969
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-200">
                  <MdEmail className="text-lg" /> calnoy@gmail.com
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all duration-200">
                  <MdAccessTime className="text-lg" /> 10:00 - 18:00, Mon - Sat
                </li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-base font-semibold mb-5">Account</h3>
              <ul className="space-y-5 text-base md:text-small-size lg:text-base">
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  Sign In
                </li>
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  View Cart
                </li>
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  My Order
                </li>
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  Meal Plans
                </li>
              </ul>
            </div>

            {/*Company */}
            <div>
              <h3 className="text-base font-semibold mb-5">Company</h3>
              <ul className="space-y-5 text-base md:text-small-size lg:text-base">
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  Terms & Conditions
                </li>
                <li className="cursor-pointer hover:text-primary transition-all duration-200">
                  Help
                </li>
              </ul>
            </div>

            {/* PaymentMethods/SocialIcons */}
            <div>
              {/* Payment Methods */}
              <div>
                <h3 className="text-base font-semibold mb-5">Payment</h3>
                <ul className="flex gap-2 mb-10">
                  <li>
                    <img
                      className="w-[50px] h-[50px]"
                      src="https://img.icons8.com/?size=100&id=13608&format=png&color=000000"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-[50px] h-[50px]"
                      src="https://img.icons8.com/?size=100&id=Sq0VNi1Afgmj&format=png&color=000000"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-[50px] h-[50px]"
                      src="https://img.icons8.com/?size=100&id=13607&format=png&color=000000"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-[50px] h-[50px]"
                      src="https://img.icons8.com/?size=100&id=34350&format=png&color=000000"
                      alt=""
                    />
                  </li>
                </ul>

                {/* Follow us */}
                <div>
                  <h3 className="text-base font-semibold mb-5">Follow us</h3>
                  <ul className="flex gap-2">
                    <li>
                      <RiLineFill className="text-large-size cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-primary" />
                    </li>
                    <li>
                      <RiFacebookCircleFill className="text-large-size cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-primary" />
                    </li>
                    <li>
                      <RiInstagramFill className="text-large-size cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-primary" />
                    </li>
                    <li>
                      <RiPinterestFill className="text-large-size cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-primary" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Copyright */}
        <div className="text-center text-small-size mt-6 mb-[115px] lg:mb-6 text-third">
          © 2025 CalNoy. All Rights Reserved
        </div>
      </div>
      {/* Fixed TextScroller */}
      <div className="bottom-0 left-0 w-full z-50">
        <TextScroller />
      </div>
    </div>
  );
};

export default Footer;
