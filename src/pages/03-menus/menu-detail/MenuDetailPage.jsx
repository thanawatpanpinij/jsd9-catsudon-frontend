import React, { useEffect } from "react";
import { menus } from "../../../utils/data/menus.js";
import Breadcrumbs from "../../../components/shared-component/Breadcrumbs.jsx";
import MenuDetailCard from "../../../components/menus-detail/MenuDetailSection.jsx";
import ReviewSection from "../../../components/menus-detail/ReviewSection.jsx";

const menuId = 2; // Mock id

export default function MenuDetailPage() {
    const menu = menus.find((menuItem) => menuItem.id === menuId);

    let recommendedDishes;
    if (menu) {
        recommendedDishes = menus.filter((menuItem) => menuItem.category === menu.category && menuItem.id !== menu.id);
    }

    useEffect(() => {
        document.title = `CalNoy | ${menu.name}`;
    }, []);

    return (
        <main
            className="
            max-w-[1440px] mx-auto mb-16 pt-14
            576px:px-8"
        >
            <Breadcrumbs
                style="
                mx-8 mb-8 text-[#b9b9b9] font-medium
                576px:mx-0 576px:p-0"
                breadcrumb="All menus"
                detailPage={menu}
            />
            <div className="1023px:flex 1023px:gap-8">
                <MenuDetailCard menu={menu} recommendedDishes={recommendedDishes} />
                <ReviewSection />
            </div>
        </main>
    );
}
