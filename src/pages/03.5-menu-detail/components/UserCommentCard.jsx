import React from "react";

export default function UserCommentCard({ name, imageUrl, comment, date }) {
    return (
        <article className="320px:p-5 320px:border-[1.5px] 320px:border-bright-grey 320px:rounded-4xl 320px:shadow-[0_0_5px_0_rgba(0,0,0,0.1)]">
            <section className="flex justify-between items-center mb-4">
                <section className="flex gap-2">
                    <div className="overflow-hidden w-[50px] rounded-full">
                        <img
                            className="w-full aspect-square object-cover"
                            src={imageUrl}
                            alt={`${name} picture`}
                        />
                    </div>
                    <div>
                        <p className="text-third font-semibold">{name}</p>
                        <div className="inline-flex gap-2 mr-4">
                            <i className="fa-solid fa-star text-fourth"></i>
                            <i className="fa-solid fa-star text-fourth"></i>
                            <i className="fa-solid fa-star text-fourth"></i>
                            <i className="fa-solid fa-star text-fourth"></i>
                            <i className="fa-regular fa-star text-third"></i>
                        </div>
                    </div>
                </section>
                <div className="relative">
                    <button
                        className="cursor-pointer"
                        aria-label="show dropdown option"
                    >
                        <i className="fa-solid fa-ellipsis text-third"></i>
                    </button>
                    {/* {showOption && (
                        <div className="overflow-hidden absolute w-max bg-white border-[1.5px] border-bright-grey rounded-2xl shadow-[0_0_5px_0_rgba(0,0,0,0.1)">
                            <p className="cursor-pointer px-4 py-2 transition-colors duration-200 hover:bg-primary-background">View Profile</p>
                            <p className="cursor-pointer px-4 py-2 text-secondary transition-colors duration-200 hover:bg-primary-background">Report User</p>
                        </div>
                    )} */}
                </div>
            </section>
            <p className="mb-4 text-grey">{comment}</p>
            <p className="text-grey">{date}</p>
        </article>
    );
}
