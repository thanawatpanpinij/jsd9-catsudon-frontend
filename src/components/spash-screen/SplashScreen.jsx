import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./SplashScreen.css";

const SplashScreen = ({ onSplashComplete }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      onSplashComplete();
    }, 3000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completeTimer);
    };
  }, [onSplashComplete]);

  return (
    <div className="splash-screen">
      <div className="animation-container">
        <div className={`lottie-wrapper ${showLogo ? "fade-out" : "fade-in"}`}>
          <DotLottieReact
            src="https://lottie.host/509d081e-a742-40ae-bd78-455859d20069/GyX0Nl53ch.lottie"
            autoplay
            loop
            className="w-[260px] h-[260px]"
          />
        </div>
        <div className={`logo-wrapper ${showLogo ? "fade-in" : "fade-out"}`}>
          <img
            src="https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720548/logo-footer_tqcgdg.png"
            alt="Logo"
            className="w-[260px] h-[95px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
