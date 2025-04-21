import React from "react";
import { Link } from "react-router";

export default function Breadcrumbs({ breadcrumb, detailPage = null }) {
    return (
        <nav
            className="
            mx-8 mb-8 text-[#b9b9b9] font-medium
            576px:mx-0 576px:p-0"
        >
            <p>
                <Link to="/" className="inline pr-4 transition-colors hover:text-third">
                    <i className="fa-solid fa-house"></i>
                </Link>
                <span className="transition-colors duration-200 hover:text-third">
                    <i className="fa-solid fa-chevron-right pr-4"></i>
                    <Link to="/menus" className="inline pr-4">
                        <span>{breadcrumb}</span>
                    </Link>
                </span>
                {detailPage && (
                    <>
                        <i className="fa-solid fa-chevron-right pr-4 text-third"></i>
                        <span className="text-third">{detailPage.name}</span>
                    </>
                )}
            </p>
        </nav>
    );
}
