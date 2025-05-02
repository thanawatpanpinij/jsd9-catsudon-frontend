import React from "react";

export default function BlogDetail() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans text-gray-800">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Diana Brembo"
          className="w-6 h-6 rounded-full"
        />
        <span>Diana Brembo</span> • <span>Green Juices | 8 minute read</span>
      </div>

      <h1 className="text-3xl font-bold text-black mb-4">
        The Benefits of Homemade <br /> Green Juice Every Morning
      </h1>

      <img
        src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744976908/003-overnight-oats_fnxzbk.avif"
        alt="Green Juice Cover"
        className="w-full h-[400px] object-contain rounded-xl mb-6"
      />

      <p className="mb-6 text-gray-700">
        Starting your day with a glass of homemade green juice can be a powerful
        habit for your body, mind, and overall well-being. Packed with vitamins,
        minerals, antioxidants, and hydration, green juice delivers a
        concentrated dose of nutrients in a single sip — and here’s why making
        it at home is even better.
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">🍀 1. Rich in Nutrients</h2>
        <p className="mb-2">
          Homemade green juice is typically made from leafy greens like spinach,
          kale, celery, cucumber, and herbs such as parsley or mint. These
          ingredients are loaded with:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Vitamins: A, C, K, and many B vitamins</li>
          <li>Minerals: Iron, magnesium, calcium, and potassium</li>
          <li>
            Phytonutrients: Powerful antioxidants that fight inflammation and
            support cell health
          </li>
        </ul>
      </section>

      <div className="flex justify-center gap-4 mb-6">
        <img
          src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744976908/005-veggies_fkb3gx.avif"
          alt="Benefit 1"
          className="w-[200px] rounded-xl"
        />
        <img
          src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744976909/007-leafy_qsaxwc.avif"
          alt="Benefit 2"
          className="w-[200px] rounded-xl"
        />
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">💧 2. Hydration Boost</h2>
        <p className="mb-2">
          Drinking green juice first thing in the morning gives your body a
          hydrating jumpstart after 6–8 hours of sleep. Ingredients like
          cucumber and celery have high water content, helping to:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Flush out toxins</li>
          <li>Improve digestion</li>
          <li>Rehydrate skin and organs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">
          ⚡ 3. Increases Energy Naturally
        </h2>
        <p className="mb-2">
          The natural sugars in green juice (especially if you add a bit of
          apple or pineapple) give you a gentle energy boost — without the crash
          that comes from coffee or sugary snacks. Plus, the chlorophyll in
          leafy greens may help increase oxygen in the blood.
        </p>
      </section>

    </div>
  );
}
