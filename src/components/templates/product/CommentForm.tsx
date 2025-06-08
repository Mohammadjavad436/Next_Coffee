import showSwal from "@/utility/helper";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";


interface TPCommentForm {
    productID: string

}

const CommentForm = ({ productID }: TPCommentForm) => {
    const [body, setBody] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [score, setScore] = useState<number>(5)

    const handleChangeScore = (NumberScore: number) => {
        setScore(NumberScore)
        showSwal('امتیاز شما با موفقیت ثبت شد', 'success', 'یستن')

    }

    const submitButton = async () => {
        const comment = { username, body, email, score, productID, isAccept: false }

        const dateComment = await fetch('/api/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        })

        const res = await dateComment.json()
        console.log(res)
        if (dateComment.ok)
            showSwal('امتیاز شما با موفقیت ثبت شد', 'success', 'یستن')
    }

    return (
        <div className="w-full">
            <p className="text-sm font-bold h-[30px]">دیدگاه خود را بنویسید</p>
            <p>
                نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
                <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-3.5 items-baseline">
                <p className="relative -bottom-[3px]">امتیاز شما :</p>
                <div className="flex gap-0.5 pt-0.5 rtl text-lg text-gray-500">
                    <IoMdStar className="hover:text-orange-500" onClick={() => handleChangeScore(5)} />
                    <IoMdStar className="hover:text-orange-500" onClick={() => handleChangeScore(4)} />
                    <IoMdStar className="hover:text-orange-500" onClick={() => handleChangeScore(3)} />
                    <IoMdStar className="hover:text-orange-500" onClick={() => handleChangeScore(2)} />
                    <IoMdStar className="hover:text-orange-500" onClick={() => handleChangeScore(1)} />
                </div>
            </div>
            <div className="mt-8 grid gap-2.5 w-full">
                <label htmlFor="">
                    دیدگاه شما
                    <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="comment"
                    name="comment"
                    cols={45}
                    rows={8}
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder=""
                    className="rounded bg-white text-black border border-[rgba(103,103,103,0.34)] p-4 font-shabnam resize-none"
                ></textarea>
            </div>
            <div className="flex gap-8">
                <div className="mt-8 grid gap-2.5 w-full">
                    <label htmlFor="">
                        نام
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="bg-white text-black border border-[rgba(103,103,103,0.34)] w-full font-shabnam rounded p-3"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mt-8 grid gap-2.5 w-full">
                    <label htmlFor="">
                        ایمیل
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        className="bg-white text-black border border-[rgba(103,103,103,0.34)] w-full font-shabnam rounded p-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-end items-baseline gap-3.5 my-5">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    className="appearance-none w-4 h-4 border border-[#757474] rounded-sm align-sub translate-y-1/4 outline-none checked:bg-[rgb(52,24,14)] checked:border-[rgb(52,24,14)] hover:shadow-[0_0_0_3px_#ebebeb] hover:border-[#8c8c8c] focus:shadow-[0_0_0_3px_#ebebeb] focus:border-[#8c8c8c]"
                />
                <p className="text-sm font-shabnam">
                    {" "}
                    ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
                    می‌نویسم.
                </p>
            </div>
            <button onClick={submitButton} className="bg-[rgb(0,137,121)] px-5 py-3 cursor-pointer mt-8 border-0 transition-all duration-200 font-shabnam hover:bg-[rgb(113,29,28)]">
                ثبت
            </button>
        </div>
    );
};

export default CommentForm; 