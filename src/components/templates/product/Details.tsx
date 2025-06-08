import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

export interface TComment {
    _id: string;
    username: string;
    body: string;
    email: string;
    score: number;
    productID: string;
    isAccept: boolean;
    date: string;
    __v: number;
}

export interface TProductDetail {
    _id: string;
    name: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    weight: number;
    suitableFor: string;
    smell: string;
    score: number;
    tags: string[];
    comments: TComment[];
    __v: number;
}

export interface DetailsProps {
    productDetail: TProductDetail;
}

const Details = ({ productDetail }: DetailsProps) => {
    return (
        <main style={{ width: "63%" }}>
            <Breadcrumb
                title={productDetail.name}
            />
            <h2>
                {productDetail.name}
            </h2>

            <div className="flex gap-[9px] mt-8">
                <div className="flex gap-0.5">
                    <FaStar className="text-orange-500 text-[1.4rem]" />
                    <FaStar className="text-orange-500 text-[1.4rem]" />
                    <FaStar className="text-orange-500 text-[1.4rem]" />
                    <FaStar className="text-orange-500 text-[1.4rem]" />
                    <FaStar className="text-orange-500 text-[1.4rem]" />
                </div>
                <p>(دیدگاه {productDetail.score} کاربر)</p>
            </div>

            <p className="text-[rgb(52,24,14)] text-2xl font-bold mt-6 mb-6">
                {productDetail.price}
            </p>
            <span className="text-[15px] block w-[93%] text-[rgb(160,151,151)]">
                {productDetail.longDescription}
            </span>

            <hr />

            <div className="flex items-center gap-[5px] mb-[50px]">
                <IoCheckmark className="text-[1.5rem]" />
                <p>موجود در انبار</p>
            </div>

            <div className="flex gap-2.5 justify-end items-center text-center mb-5 flex-row-reverse">
                <button className="bg-[rgb(0,137,121)] px-5 py-[0.85rem] cursor-pointer border-0 transition-all duration-200 font-shabnam hover:bg-[rgb(113,29,28)]">
                    افزودن به سبد خرید
                </button>
                <div className="w-20 flex items-center justify-between border border-gray-500">
                    <span className="w-[30%] cursor-pointer py-2.5 border-l border-black">-</span>
                    <span>1</span>
                    <span className="w-[30%] cursor-pointer py-2.5 border-r border-black">+</span>
                </div>
            </div>

            <section className="flex gap-5 mb-[30px]">
                <div className="flex gap-[3px] items-center">
                    <CiHeart className="text-[1.3rem]" />
                    <Link href="/" className="text-sm transition-all duration-200 hover:text-[#777] hover:cursor-pointer">
                        افزودن به علاقه مندی ها
                    </Link>
                </div>
                <div className="flex gap-[3px] items-center">
                    <TbSwitch3 className="text-[1.3rem]" />
                    <Link href="/" className="text-sm transition-all duration-200 hover:text-[#777] hover:cursor-pointer">
                        مقایسه
                    </Link>
                </div>
            </section>

            <hr />

            <div className="flex flex-col gap-[15px] mt-[30px]">
                <strong>شناسه محصول: {productDetail._id.toString()}</strong>
                <p>
                    {" "}
                    <strong>دسته:</strong>
                    {productDetail.tags.join(',')}
                </p>
            </div>

            <div className="flex mt-8 gap-2">
                <p>به اشتراک گذاری: </p>
                <Link href="/">
                    <FaTelegram className="text-[1.3rem]" />
                </Link>
                <Link href="/">
                    <FaLinkedinIn className="text-[1.3rem]" />
                </Link>
                <Link href="/">
                    <FaPinterest className="text-[1.3rem]" />
                </Link>
                <Link href="/">
                    <FaTwitter className="text-[1.3rem]" />
                </Link>
                <Link href="/">
                    <FaFacebookF className="text-[1.3rem]" />
                </Link>
            </div>

            <hr />
        </main>
    );
};

export default Details;
