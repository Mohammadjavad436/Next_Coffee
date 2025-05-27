import React from "react";
import { MdOutlineSms } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const Card = () => {
  return (
    <div className="relative overflow-hidden">
      <Link className="relative block overflow-hidden transition-transform duration-700 ease-in-out hover:scale-[1.03]" href={"/article/123"}>
        <Image
          src="https://set-coffee.com/wp-content/uploads/elementor/thumbs/-%D9%82%D9%87%D9%88%D9%87-%D8%A8%D8%A7-%D8%B4%DB%8C%D8%B1-qi8xuncj4ordgstrl43mbg5jfj1ezzamf6v9rnitn0.jpg"
          alt=""
          width={500}
          height={300}
          style={{ width: '100%', height: 'auto' }}
        />
      </Link>
      <div className="absolute top-3 right-3 p-[0.3rem_0.5rem] bg-white grid rounded text-black">
        <span className="text-xl">24</span>
        <span>بهمن</span>
      </div>
      <div className="w-full text-center transition-shadow duration-600 ease-in-out p-6 absolute bottom-0 bg-gradient-to-b from-transparent via-black/35 to-black/80">
        <span className="text-sm bg-[rgb(52,24,14)] p-2 rounded">قهوه</span>
        <Link href={"/article/123"} className="block mt-2.5 mb-2.5 leading-[1.4] text-[23px] break-words">
          مصرف قهوه با شیر برای کاهش التهاب
        </Link>
        <div className="flex items-center justify-center gap-[13px] text-sm text-gray-500">
          <p>نویسنده</p>
          <Image
            src="https://secure.gravatar.com/avatar/665a1a4dc7cc052eaa938253ef413a78?s=32&d=mm&r=g"
            alt=""
            width={32}
            height={32}
            className="w-5 rounded-full"
          />
          <p>Mohebi</p>
          <div className="relative">
            <MdOutlineSms className="text-xl cursor-pointer" />
            <span className="absolute -top-[5px] -left-1 text-[7px] rounded-full p-[0.1rem_0.2rem_0] bg-[rgb(52,24,14)]">0</span>
          </div>
          <div className="relative -bottom-0.5 group">
            <IoShareSocialOutline className="text-xl cursor-pointer" />
            <div className="absolute -top-9 bg-black p-[0.3rem_0.3rem_0] rounded z-[999] opacity-0 group-hover:opacity-100 text-white flex gap-1.5 before:content-[''] before:absolute before:left-1/2 before:top-full before:-ml-[5px] before:w-0 before:h-0 before:border-solid before:border-[5px_5px_0] before:border-t-black before:border-transparent">
              <Link href={"/"}>
                <FaTelegram className="text-base" />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn className="text-base" />
              </Link>
              <Link href={"/"}>
                <FaPinterest className="text-base" />
              </Link>
              <Link href={"/"}>
                <FaTwitter className="text-base" />
              </Link>
              <Link href={"/"}>
                <FaFacebookF className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;