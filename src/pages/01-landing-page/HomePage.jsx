import React, { useEffect } from "react";
import HeaderHero from "../../components/01c-landing-page/header-hero/HeaderHero";
import ShopByCategory from "../../components/01c-landing-page/ShopByCategory"
import FarmFreshMenus from "../../components/01c-landing-page/FarmFreshMenus"
import DeliveryBanner from "../../components/01c-landing-page/DeliveryBanner";
import FreshFlavorful from "../../components/01c-landing-page/FreshFlavorful";
import PromotionBanner from "../../components/01c-landing-page/PromotionBanner";
import ContactUs from "../../components/01c-landing-page/ContactUs";
import ClientReviews from "../../components/01c-landing-page/client-reviews/ClientReviews";


export default function HomePage() {
  useEffect(() => {
    document.title = `CalNoy | ${HomePage.name}`;
  }, []);

  return (
    <div>
      <HeaderHero />
      <ShopByCategory />
      <FarmFreshMenus />
      <DeliveryBanner />
      <FreshFlavorful />
      <PromotionBanner />
      <ClientReviews />
      <ContactUs />
    </div>
  );
}
