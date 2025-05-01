import React, { useEffect } from "react";
import AllMenus from "../../components/03c-all-menus/AllMenu";

export default function MenusPage() {
  useEffect(() => {
    document.title = `CalNoy | All menus`;
  }, []);
  return (
    <main>
      <AllMenus />
    </main>
  );
}
