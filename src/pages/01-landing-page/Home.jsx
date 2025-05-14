import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderHero from "../../components/01c-landing-page/header-hero/HeaderHero";
import ShopByCategory from "../../components/01c-landing-page/ShopByCategory";
import FarmFreshMenus from "../../components/01c-landing-page/FarmFreshMenus";
import DeliveryBanner from "../../components/01c-landing-page/DeliveryBanner";
import FreshFlavorful from "../../components/01c-landing-page/FreshFlavorful";
import PromotionBanner from "../../components/01c-landing-page/PromotionBanner";
import ContactUs from "../../components/01c-landing-page/ContactUs";
import ClientReviews from "../../components/01c-landing-page/client-reviews/ClientReviews";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    document.title = "CalNoy | Home";
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTarget = params.get("scroll");

    if (scrollTarget === "contact-us") {
      setTimeout(() => {
        document
          .getElementById("contact-us")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

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
