import React from "react";

export default function RecommendedDishCard({ recommendedDish }) {
    return (
        <article
            className="
            w-full mb-8
            576px:flex 576px:gap-4 576px:p-8 576px:border 576px:border-bright-grey 576px:shadow-[0_0_5px_0_rgba(0,0,0,0.1)] 576px:rounded-4xl
            767px:flex-col 767px:m-0
            1440px:flex-row"
        >
            <div
                className="
                overflow-hidden w-full h-fit mb-4 rounded-4xl
                576px:w-[40%] 576px:m-0
                767px:w-full"
            >
                <img loading="lazy" className="w-full object-cover transition-transform duration-200 hover:scale-[1.1]" src={recommendedDish.imageUrl} alt={`${recommendedDish.name} picture`} />
            </div>
            <section
                className="
                flex flex-col justify-between font-semibold
                576px:w-[60%]
                767px:grow-1 767px:w-full"
            >
                <div className="mb-4">
                    <h3 className="mb-1 text-normal-size text-third">{recommendedDish.name}</h3>
                    <p className="text-grey">{recommendedDish.servingSize}</p>
                </div>
                <div className="flex justify-between text-medium-size">
                    <span className="text-primary">{recommendedDish.price} THB</span>
                    <button aria-label="Add to your cart">
                        <i className="cursor-pointer fa-solid fa-circle-plus text-third transition-colors hover:text-primary"></i>
                    </button>
                </div>
            </section>
        </article>
    );
}
