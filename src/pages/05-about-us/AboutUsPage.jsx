import React, { useEffect } from "react";
import AboutUs from "../../components/05c-about-us/AboutUs";

export default function AboutUsPage() {
  useEffect(() => {
    document.title = `CalNoy | About us`;
  }, []);
  return (
    <div>
      <AboutUs />
    </div>
  );
}
