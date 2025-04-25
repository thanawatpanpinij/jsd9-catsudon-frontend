import React, { useEffect } from "react";
import { menus } from "../../utils/data/menus";
import Breadcrumbs from "../shared-component/Breadcrumbs";
import RecommendedDish from "./RecommendedDish";
import UserComment from "./UserComment";

const users = [
    {
        id: 1,
        userName: "@sarah_brown",
        imageUrl: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720542/001-user_qjnijn.jpg",
        comment: "Fastest delivery ever! I blinked, and boom! my food was here!.",
        date: "January 4, 2025",
    },
    {
        id: 4,
        userName: "@leio_mclaren",
        imageUrl: "https://res.cloudinary.com/dsgtmtcmt/image/upload/v1744720545/004-user_kfpir5.webp",
        comment: "Absolutely delicious and amazing price!",
        date: "February 12, 2025",
    },
];

const id = 2; // Mock id

export default function MenuDetail() {
    const menuDetail = menus.find((menu) => menu.id === id);

    let recommendedDishes;
    if (menuDetail) {
        recommendedDishes = menus.filter((menu) => menu.category === menuDetail.category && menu.id !== menuDetail.id);
    }
    useEffect(() => {
        document.title = `CalNoy | ${menuDetail.name}`;
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
                detailPage={menuDetail}
            />
            <div className="1023px:flex 1023px:gap-8">
                <div
                    className="
                    px-8 w-[min(100%,1024px)]
                    576px:p-0
                    767px:mb-8
                    1023px:p-8 1023px:border-[1.5px] 1023px:border-bright-grey 1023px:rounded-4xl 1023px:shadow-[0_0_5px_0_rgba(0,0,0,0.1)]"
                >
                    <section
                        className="
                        mb-8
                        767px:flex 767px:gap-8 767px:justify-between"
                    >
                        <section
                            className="
                            w-full mb-8
                            767px:w-[min(40%,437px)]"
                        >
                            <div className="overflow-hidden mb-8 rounded-4xl">
                                <img className="w-full object-cover transition-transform duration-200 hover:scale-[1.1]" src={menuDetail.imageUrl} alt={menuDetail.name} />
                            </div>
                            <section
                                className="
                                grid grid-cols-2 gap-y-4 place-items-center py-4 font-medium border-2 border-primary rounded-2xl
                                576px:grid-cols-4
                                767px:grid-cols-2
                                1440px:grid-cols-4"
                            >
                                <div className="w-full border-r-2 border-primary">
                                    <p className="text-center text-medium-size text-primary">{menuDetail.nutrition.calories}</p>
                                    <p className="text-center text-dark-grey">Calories</p>
                                </div>
                                <div
                                    className="
                                    w-full
                                    576px:border-r-2 576px:border-primary
                                    767px:border-0
                                    1440px:border-r-2"
                                >
                                    <p className="text-center text-medium-size text-primary">{menuDetail.nutrition.protein} g</p>
                                    <p className="text-center text-dark-grey">Protein</p>
                                </div>
                                <div className="w-full border-r-2 border-primary">
                                    <p className="text-center text-medium-size text-primary">{menuDetail.nutrition.fat} g</p>
                                    <p className="text-center text-dark-grey">Fat</p>
                                </div>
                                <div className="w-full ">
                                    <p className="text-center text-medium-size text-primary">{menuDetail.nutrition.carbohydrates} g</p>
                                    <p className="text-center text-dark-grey">Carb</p>
                                </div>
                            </section>
                        </section>
                        <section
                            className="
                            w-full text-grey
                            767px:w-[min(60%,491px)]"
                        >
                            <section className="mb-4 text-third font-semibold">
                                <h1 className="mb-2 text-[2rem]">{menuDetail.name}</h1>
                                <div className="mb-2">
                                    <div className="inline-flex gap-2 mr-4">
                                        <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                                        <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                                        <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                                        <i className="fa-solid fa-star text-[1.25rem] text-fourth"></i>
                                        <i className="fa-regular fa-star text-[1.25rem]"></i>
                                    </div>
                                    <span className="text-normal-size">(4.5)</span>
                                </div>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <span className="text-heading03-size">{menuDetail.price} THB</span>
                                    <span className="px-4 py-2 text-base-size text-white font-medium bg-fourth round rounded-full">{menuDetail.servingSize}</span>
                                </div>
                            </section>
                            <section className="mb-4">{menuDetail.description.en}</section>
                            <section className="mb-4">
                                <h2 className="mb-2 text-third text-normal-size font-medium">INGREDIENTS</h2>
                                <ol className="text-pretty">
                                    {menuDetail.ingredients.en.map((ingredient, index) => (
                                        <div key={index + 1} className="flex gap-1">
                                            <span>{index + 1}.</span>
                                            <li key={index + 1}>{ingredient}</li>
                                        </div>
                                    ))}
                                </ol>
                            </section>
                            <button className="cursor-pointer w-full px-6 py-4 bg-primary text-white rounded-full transition-colors duration-200 hover:bg-third">Add to Your Cart</button>
                        </section>
                    </section>
                    <section>
                        <h2 className="mb-8 text-third text-normal-size font-medium">RECOMMENDED DISHES</h2>
                        <section
                            className="
                            767px:grid 767px:grid-cols-3 767px:gap-8
                            1023px:grid-cols-2"
                        >
                            {recommendedDishes.map((recommendedDish) => (
                                <RecommendedDish key={recommendedDish.id} recommendedDish={recommendedDish} />
                            ))}
                        </section>
                    </section>
                </div>
                <section
                    className="
                    h-fit mx-8
                    576px:m-0
                    1023px:p-8 1023px:border-[1.5px] 1023px:border-bright-grey 1023px:shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 1023px:rounded-4xl
                    1440px:max-w-[28%]"
                >
                    <section>
                        <div className="flex gap-2 items-center mb-4">
                            <i className="fa-regular fa-comment-dots text-medium-size text-grey"></i>
                            <h2 className="text-medium-size text-third font-semibold">Comments</h2>
                            <span className="px-2 py-[2px] text-small-size text-[#696969] bg-bright-grey rounded-full">{users.length}</span>
                        </div>
                        <section
                            className="
                            grid gap-4 mb-8
                            767px:grid-cols-2
                            1023px:grid-cols-1"
                        >
                            {users.map((user) => (
                                <UserComment key={user.id} name={user.userName} imageUrl={user.imageUrl} comment={user.comment} date={user.date} />
                            ))}
                        </section>
                    </section>
                    <div
                        className="
                        relative flex justify-between items-center border-[1.5px] border-primary rounded-full
                        767px:max-w-[491px] 767px:mx-auto
                        1023px:max-w-full"
                    >
                        <input className="w-full px-4 py-3 rounded-full" type="text" placeholder="Add new comment here" />
                        <button
                            className="cursor-pointer absolute right-4 inline-flex justify-center items-center w-[24px] aspect-square bg-primary rounded-full transition-colors duration-200 hover:bg-third"
                            aria-label="Add new comment"
                        >
                            <i className="fa-solid fa-arrow-up-long text-small-size text-white"></i>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
