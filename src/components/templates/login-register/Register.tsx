import Link from "next/link";
import { useState } from "react";
import Sms from "./Sms";

type TPRegister = {
  showLoginForm: () => void
}

const Register = ({ showLoginForm }: TPRegister) => {
  const [registerWithPass, setRegisterWithPass] = useState(false)
  const [isShowOtpInput, setIsShowOtpInput] = useState(false)



  const handleShowOtp = () => {
    setIsShowOtpInput(true)
  }

  const handleBackRegister = () => {
    setIsShowOtpInput(false)
  }
  const handleRegisterWithPass = () => {
    setRegisterWithPass(true)
  }



  return (

    isShowOtpInput ? (
      <Sms handleBack={handleBackRegister} />

    ) : (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="grid bg-white p-2.5 px-6 w-[380px] font-shabnam mx-auto  mb-8 rounded shadow-md text-center text-black">
          <input
            className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
            type="text"
            placeholder="نام"
          />
          <input
            className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
            type="text"
            placeholder="شماره موبایل"
          />
          <input
            className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
            type="email"
            placeholder="ایمیل (دلخواه)"
          />
          {
            registerWithPass && (
              <input
                className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
                type="password"
                placeholder="رمز عبور"
              />
            )
          }
          {
            !registerWithPass && (
              <p onClick={handleShowOtp} className="mt-4 p-3 cursor-pointer font-shabnam bg-[#34180e] text-white">
                ثبت نام با کد تایید
              </p>
            )
          }

          <button onClick={handleRegisterWithPass} className="mt-3 p-3 cursor-pointer font-shabnam bg-[#34180e] text-white">
            ثبت نام با رمزعبور
          </button>
          <p
            className="text-sm text-center mt-4 cursor-pointer mb-12"
            onClick={showLoginForm}
          >
            برگشت به ورود
          </p>
        </div >
        <Link href={'/'} className="block w-max mx-auto font-shabnam cursor-pointer text-sm text-[#34180e]">لغو</Link>
      </div >

    )

  );
};

export default Register;
