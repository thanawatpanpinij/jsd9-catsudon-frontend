import React from "react";
import HeaderHero from "../../components/01c-landing-page/header-hero/HeaderHero";
import ShopByCategory from "../../components/01c-landing-page/ShopByCategory"
import FarmFreshMenus from "../../components/01c-landing-page/FarmFreshMenus"
import DeliveryBanner from "../../components/01c-landing-page/DeliveryBanner";
import FreshFlavorful from "../../components/01c-landing-page/FreshFlavorful";


export default function HomePage() {
  return (
    <div>
      <HeaderHero />
      <ShopByCategory />
      <FarmFreshMenus />
      <DeliveryBanner />
      <FreshFlavorful />
    </div>
  );
}
