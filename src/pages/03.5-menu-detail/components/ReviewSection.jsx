import React from 'react'
import UserCommentCard from './UserCommentCard.jsx'

export default function ReviewSection() {
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
    return (
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
                        <UserCommentCard key={user.id} name={user.userName} imageUrl={user.imageUrl} comment={user.comment} date={user.date} />
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
    )
}
