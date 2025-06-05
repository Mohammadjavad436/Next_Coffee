"use client";
import React from "react";
import { useState } from "react";
import Description from "./Description";
import MoreInfoes from "./MoreInfoes";
import Comments from "./Comments";

type TabType = "description" | "moreInfoes" | "comments";

const Tabs: React.FC = () => {
    const [tab, setTab] = useState<TabType>("description");

    return (
        <div data-aos="fade-left" className="relative p-[50px] pb-20 w-full">
            <input
                onClick={() => setTab("description")}
                onChange={() => setTab("description")}
                type="radio"
                id="description"
                name="tab-control"
                checked={tab === "description"}
                className="hidden"
            />
            <input
                onClick={() => setTab("moreInfoes")}
                onChange={() => setTab("moreInfoes")}
                type="radio"
                id="moreInfoes"
                name="tab-control"
                checked={tab === "moreInfoes"}
                className="hidden"
            />
            <input
                onClick={() => setTab("comments")}
                onChange={() => setTab("comments")}
                type="radio"
                id="comments"
                name="tab-control"
                checked={tab === "comments"}
                className="hidden"
            />
            <ul className="list-none p-0 flex flex-row mb-2.5 w-[390px] mx-auto justify-between items-end flex-wrap">
                <li className="box-border flex-1 w-[30px] px-2.5 text-center">
                    <label
                        htmlFor="description"
                        role="button"
                        className="transition-all duration-300 text-gray-500 text-base relative pt-5 overflow-hidden text-ellipsis block cursor-pointer font-shabnam hover:text-black"
                    >
                        {" "}
                        توضیحات{" "}
                    </label>
                </li>
                <li className="box-border flex-1 w-[30px] px-2.5 text-center">
                    <label
                        htmlFor="moreInfoes"
                        role="button"
                        className="transition-all duration-300 text-gray-500 text-base relative pt-5 overflow-hidden text-ellipsis block cursor-pointer font-shabnam hover:text-black"
                    >
                        {" "}
                        اطلاعات بیشتر{" "}
                    </label>
                </li>
                <li className="box-border flex-1 w-[30px] px-2.5 text-center">
                    <label
                        htmlFor="comments"
                        role="button"
                        className="transition-all duration-300 text-gray-500 text-base relative pt-5 overflow-hidden text-ellipsis block cursor-pointer font-shabnam hover:text-black"
                    >
                        {" "}
                        نظرات (7){" "}
                    </label>
                </li>
            </ul>

            <div className="mt-[30px]">
                <section
                    className={`font-shabnam leading-relaxed ${tab === "description" ? "block" : "hidden"
                        } animate-[content_0.3s_ease-in-out_1]`}
                >
                    <Description />
                </section>
                <section
                    className={`font-shabnam leading-relaxed ${tab === "moreInfoes" ? "block" : "hidden"
                        } animate-[content_0.3s_ease-in-out_1]`}
                >
                    <MoreInfoes />
                </section>
                <section
                    className={`font-shabnam leading-relaxed ${tab === "comments" ? "block" : "hidden"
                        } animate-[content_0.3s_ease-in-out_1]`}
                >
                    <Comments />
                </section>
            </div>
        </div>
    );
};

export default Tabs; 