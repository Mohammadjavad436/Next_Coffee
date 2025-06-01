import Link from "next/link";
import { useState } from "react";
import Sms from "./Sms";
import showSwal from "@/utility/helper";
import { validateEmail, validatePassword, validatePhone } from "@/utility/auth";
import { redirect } from 'next/navigation'



type TPRegister = {
  showLoginForm: () => void
}

const Register = ({ showLoginForm }: TPRegister) => {
  const [registerWithPass, setRegisterWithPass] = useState(false)
  const [isShowOtpInput, setIsShowOtpInput] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')


  const handleShowOtp = () => {
    setIsShowOtpInput(true)
  }

  const handleBackRegister = () => {
    setIsShowOtpInput(false)
  }
  const handleRegisterWithPass = () => {
    setRegisterWithPass(true)
  }

  const signUp = async () => {

    if (!name.trim()) {
      return showSwal('نام خود را بدرستی وارد نمایید', 'error', 'تلاش مجدد')
    }

    const isValidPhone = validatePhone(phone)

    if (!isValidPhone) {
      return showSwal('شماره موبایل  خود را به درستی وارد نمایید', 'error', 'تلاش مجدد')
    }

    const isValidEmail = validateEmail(email)

    if (email.length > 0 && !isValidEmail) {
      console.log('email lenght')
      return showSwal('ایمیل  خود را به درستی وارد نمایید', 'error', 'تلاش مجدد')
    }

    const isValidPassword = validatePassword(password)

    if (!isValidPassword) {
      return showSwal('رمز عبور خود را به درستی وارد نمایید', 'error', 'تلاش مجدد')
    }

    const user = { name, password, email, phone }
    try {
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 422) {
          showSwal('نام یا شماره موبایل تکراری هست', 'error', 'تلاش مجدد')
        }
        throw new Error(data.message || 'خطا در ثبت نام');
      }
      else if (res.ok) {
        showSwal('ثبت نام با موفیت انجام شد', 'success', 'صفحه اصلی', () => { redirect('/') })
      }

      // TODO: Handle successful registration (e.g., redirect to login)

    } catch (error) {
      console.error('Registration error:', error);
      // TODO: Show error message to user
    }
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
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
            type="text"
            placeholder="شماره موبایل"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
          <input
            className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
            type="email"
            placeholder="ایمیل (دلخواه)"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          {
            registerWithPass && (
              <input
                className="font-shabnam p-3.5 bg-white text-black rounded border border-black rtl mt-5"
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={event => setPassword(event.target.value)}
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

          <button onClick={
            () => {
              if (!registerWithPass) {
                handleRegisterWithPass()
              } else {
                signUp()

              }
            }
          } className="mt-3 p-3 cursor-pointer font-shabnam bg-[#34180e] text-white">
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
