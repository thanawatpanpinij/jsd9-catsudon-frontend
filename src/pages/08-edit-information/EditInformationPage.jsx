import { useEffect } from "react";
import useAddressContext from "../../contexts/addressContext/useAddressContext";

export default function EditCheckoutPage() {
  const { addresses, setAddresses, getAddress } = useAddressContext();

  useEffect(() => {
    document.title = `CalNoy | Edit address`;
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto p-4 md:p-10">
      <div className="flex items-center justify-center mb-9 space-x-2">
        <div className="flex items-center text-green-500">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <span className="ml-2 font-medium">Cart</span>
        </div>
        <div className="h-0.5 bg-gray-300 flex-grow"></div>
        <div className="flex items-center text-green-500">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <span className="ml-2 font-medium">Review</span>
        </div>
        <div className="h-0.5 bg-gray-300 flex-grow"></div>
        <div className="flex items-center text-gray-400">
          <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center"></div>
          <span className="ml-2 font-medium">Checkout</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Edit Address</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="name"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="street"
              >
                Street Name, Building, House No.
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="street"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="province"
              >
                Province
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="province"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone No.
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="phone"
                type="tel"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subDistrict"
              >
                Sub District, District
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="subDistrict"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="postalCode"
              >
                Postal Code
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="postalCode"
                type="text"
                placeholder=""
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="px-6 py-2 bg-white border border-green-500 text-green-500 rounded-full hover:bg-green-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Edit Payment</h2>
          <div className="mb-4">
            <button className="w-full bg-green-500 text-white py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Credit Card/Debit Card
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cardNumber"
              >
                Card number
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                  id="cardNumber"
                  type="text"
                  placeholder=""
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src="https://img.icons8.com/color/48/visa.png"
                    alt="Visa"
                    className="w-6 h-6 mr-1"
                  />
                  <img
                    src="https://img.icons8.com/color/48/mastercard.png"
                    alt="Mastercard"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cardName"
              >
                Name on card
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="cardName"
                type="text"
                placeholder="Name on card"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="expiryDate"
              >
                Expiration date
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
              />
              <p className="text-gray-500 text-xs italic mt-1">
                กรุณากรอกเป็น เดือน/ปี (ค.ศ.) เช่น 01/25
              </p>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvv"
              >
                Security Code (CVV/CVC)
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-green-500 focus:border-green-500"
                id="cvv"
                type="text"
                placeholder="CVV"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="px-6 py-2 bg-white border border-green-500 text-green-500 rounded-full hover:bg-green-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="mt-6 grid grid-cols-5 gap-4 justify-items-center">
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049943/kasikorn-bank-r02_yquqdm.png"
              alt="Kasikorn Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049939/aomsin-bank-r02_e2au6u.png"
              alt="GSB Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049939/uob-bank-r02_yimxt0.png"
              alt="UOB Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049936/ttb-bank-r02_ay6beh.png"
              alt="TTB Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049942/scb-bank-r02_rikxox.png"
              alt="SCB Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049937/baac-bank-r02_x4dyc1.png"
              alt="BAAC Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049938/citi-bank-r02_bujamj.png"
              alt="Citi Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049937/krungsri-bank-r02_cy4aw4.png"
              alt="Krungsri Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049941/bangkok-bank-r02_wo7n2x.png"
              alt="Bangkok Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
            <img
              src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1745049940/krungthai-bank-r02_g0vzot.png"
              alt="Krungthai Bank"
              className="w-10 h-10 object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
