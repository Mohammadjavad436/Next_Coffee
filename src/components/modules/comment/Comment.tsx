import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from 'next/image';

interface TPComment {
    name: string, date: string, body: string, score: number
}



const Comment = ({ name, date, body, score }: TPComment) => {
    const today = new Date(date);
    const persianDate = today.toLocaleDateString('fa-IR');

    return (
        <section className="font-shabnam flex border-b border-[rgba(0,0,0,0.218)] mt-4 gap-[25px] items-center pb-[25px]">
            <Image
                src="/images/shahin.jpg"
                width={60}
                height={60}
                className="rounded-full"
                alt="User profile"
            />
            <div>
                <div className="flex items-baseline justify-between">
                    <div className="flex gap-[5px] items-baseline">
                        <strong>{name}</strong>
                        <p>{persianDate}</p>
                    </div>
                    <div className="flex gap-1 text-orange-500">
                        {new Array(score).fill(0).map((item, index) => (
                            <FaStar key={index} />
                        ))}
                        {new Array(5 - score).fill(0).map((item, index) => (
                            <FaRegStar key={index} />
                        ))}

                    </div>
                </div>
                <p className="mb-0.5 mt-[10px]">
                    {body}
                </p>
            </div>
        </section>
    );
};

export default Comment; 