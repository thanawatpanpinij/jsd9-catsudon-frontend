import React from "react";
import { Link } from "react-router";

export default function Breadcrumbs({ style, breadcrumb, detailPage = null }) {
    return (
        <nav className={style}>
            <p>
                <Link to="/" className="inline pr-4 transition-colors hover:text-third">
                    <i className="fa-solid fa-house"></i>
                </Link>
                <span className={`transition-colors duration-200 ${detailPage ? "hover:text-third" : "text-third"}`}>
                    <i className="fa-solid fa-chevron-right pr-4"></i>
                    {detailPage ? (
                        <Link to="/menus" className="inline pr-4">
                            <span>{breadcrumb}</span>
                        </Link>
                    ) : (
                        <span>{breadcrumb}</span>
                    )}
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
