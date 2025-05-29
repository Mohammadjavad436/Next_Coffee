import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ForgetPassword = () => {
    return (
        <div className="z-[999] h-screen w-full overflow-hidden bg-gradient-to-b from-[#ede6ea] to-[#ede6ea] bg-fixed flex">
            <div className="w-1/2 relative">
                <Image
                    src="htts://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
                    alt="تصویر قهوه"
                    width={800}
                    height={800}
                    quality={100}
                    priority
                    className="h-full w-full object-cover "
                />
            </div>
            <section className="w-1/2 h-full bg-[#34180e]">
                <div className="grid bg-white p-2.5 px-6 w-[380px] font-shabnam mx-auto mt-52 mb-8 rounded shadow-md text-center text-black">
                    <input
                        className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
                        type="text"
                        placeholder="ایمیل/شماره موبایل"
                    />
                    <button className="p-3 cursor-pointer font-shabnam bg-[#34180e] text-white mt-5">
                        ارسال لینک بازیابی
                    </button>
                    <Link href="/login-register" className="text-sm mt-4 mb-12 cursor-pointer block">
                        بازگشت به صفحه ورود
                    </Link>
                    <Link href="/" className="block w-max mx-auto font-shabnam cursor-pointer text-sm text-[#34180e]">
                        لغو
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ForgetPassword; 