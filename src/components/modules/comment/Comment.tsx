import React from "react";
import { FaStar } from "react-icons/fa";

const Comment: React.FC = () => {
    return (
        <section className="font-shabnam flex border-b border-[rgba(0,0,0,0.218)] mt-4 gap-[25px] items-center pb-[25px]">
            <img src="/images/shahin.jpg" className="w-[60px] h-[60px] rounded-full" alt="" />
            <div>
                <div className="flex items-baseline justify-between">
                    <div className="flex gap-[5px] items-baseline">
                        <strong>shahin</strong>
                        <p>۲۸ آذر ۱۴۰۱</p>
                    </div>
                    <div className="flex gap-1 text-orange-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <p className="mb-0.5 mt-[10px]">
                    قهوه بسیار خوش عطر و طعمیه…کاش کم کم مدل های کپسول ها رو متنوع تر
                    کنید.
                </p>
            </div>
        </section>
    );
};

export default Comment; 