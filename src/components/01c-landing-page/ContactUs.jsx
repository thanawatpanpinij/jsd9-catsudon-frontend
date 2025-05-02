import React from "react";

const ContactUs = () => {
  return (
    <div id="contact-us" className="scroll-mt-[200px] max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[32px] mb-[56px]">
      <div className="bg-secondary p-10 rounded-[32px] grid grid-cols-1 min-[986px]:grid-cols-2 gap-8 max-[500px]:p-8">
        <div className="flex flex-col justify-center text-white w-full min-[1135px]:w-[50ch]">
          <p className="text-small-size">
            Stay in the loop with everything you need to know.
          </p>
          <p className="text-heading03-size font-medium leading-tight max-[1135px]:text-medium-size max-[986px]:text-heading03-size">
            Sign up today for exclusive 10% off your first order.
          </p>
        </div>

        <div className="flex flex-col justify-center w-full gap-2">
          <div className="bg-white py-2 pl-5 pr-2 rounded-full w-full flex">
            <input
              className="border-none outline-none w-full pr-5 max-[500px]:text-small-size max-[500px]:pr-2"
              type="text"
              placeholder="Enter your email..."
            />
            <button className="bg-primary py-3 px-10 max-[500px]:px-5 max-[500px]:py-2 max-[500px]:text-small-size rounded-full text-white hover:bg-third transition-all duration-150 ease-out cursor-pointer">
              Subscribe
            </button>
          </div>
          <p className="text-small-size text-white">
            Your privacy matters to us. Learn more in our
            <span className="font-medium underline"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
