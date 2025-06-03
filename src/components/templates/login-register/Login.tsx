import React, { useState } from "react";
import Link from "next/link";
import { redirect, } from "next/navigation";
import Sms from "./Sms";
import showSwal from '@/utility/helper'
import { validateEmail, validatePassword } from "@/utility/auth";



type TPLogin = {
  showRegisterForm: () => void
}

const Login = ({ showRegisterForm }: TPLogin) => {
  const [isShowOtpInput, setIsShowOtpInput] = useState(false)
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')


  const handleShowOtp = () => {
    setIsShowOtpInput(true)
  }

  const handleBackLogin = () => {
    setIsShowOtpInput(false)
  }


  const handleLogin = async () => {

    if (!emailOrPhone) {
      return showSwal('ایمیل یا شماره را وارد نمایید', 'warning', 'تلاش دوباره')
    }

    const validEmail = validateEmail(emailOrPhone)

    if (!validEmail) {
      return showSwal('ایمیل صحیح وارد کنید', 'warning', 'تلاش دوباره')
    }

    if (!password) {
      return showSwal('رمز عبور را وارد نمایید', 'warning', 'تلاش دوباره')
    }
    const validPassword = validatePassword(password)
    if (!validPassword) {
      return showSwal('رمز عبور صحیح وارد کنید', 'warning', 'تلاش دوباره')
    }
    try {
      const res = await fetch('/api/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailOrPhone,
          password: password,
        }),
      });

      if (res.ok) {
        showSwal('ورود با موفقیت انجام شد', 'success', 'بازگشت به صفحه اصلی', () => { redirect('/') });
        return;
      } else {
        showSwal('ایمیل یا رمز عبور اشتباه است', 'error', 'تلاش مجدد');
      }
    } catch (error) {
      showSwal('خطا در ورود', 'error', 'تلاش مجدد');
    }
  }


  return (
    isShowOtpInput ? (
      <Sms handleBack={handleBackLogin} />
    )
      :
      (
        <>
          <div className="h-full flex flex-col justify-center items-center">
            <div className="grid bg-white p-2.5 px-6 w-[380px] font-shabnam mx-auto mb-8 rounded shadow-md text-center text-black">
              <input
                className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
                type="text"
                placeholder="ایمیل/شماره موبایل"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              <input
                className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex mt-5 mb-2.5 justify-end flex-row-reverse items-center gap-1.5">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[#d9d9d9] rounded-sm align-sub -translate-y-[10%] outline-none checked:bg-[#34180e] checked:border-[#34180e] focus:shadow-[0_0_0_3px_#ebebeb] hover:shadow-[0_0_0_3px_#ebebeb] focus:border-[#8c8c8c] hover:border-[#8c8c8c]"
                />
                <p className="text-sm font-shabnam">مرا به یاد داشته باش</p>
              </div>
              <button onClick={handleLogin} className="p-3 cursor-pointer font-shabnam bg-[#34180e] text-white">ورود</button>
              <Link href={"/forget-password"} className="text-sm my-4 cursor-pointer">
                رمز عبور را فراموش کرده اید؟
              </Link>
              <button className="p-3 cursor-pointer font-shabnam bg-[#34180e] text-white" onClick={handleShowOtp}>ورود با کد یکبار مصرف</button>
              <span className="text-right mt-8 mb-5 text-sm">ایا حساب کاربری ندارید؟</span>
              <button
                className="text-[#6d6d6d] border border-[#d6d6d6] mb-12 cursor-pointer p-4 font-shabnam bg-[#f2f2f2]"
                onClick={showRegisterForm}
              >
                ثبت نام
              </button>
            </div >
            <Link href={"/"} className="block w-max mx-auto font-shabnam cursor-pointer text-sm text-[#34180e]">
              لغو
            </Link>
          </div >
        </>
      )


  );
};

export default Login;
