"use client";
import { useState } from "react";
import { authTypes } from "@/utility/constants";

import Login from "@/components/templates/login-register/Login";
import Register from "@/components/templates/login-register/Register";
import Image from "next/image";

const Login_register = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showLoginForm = () => setAuthType(authTypes.LOGIN);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-row-reverse bg-gradient-to-b from-[#ede6ea] to-[#ede6ea] bg-fixed bg-cover">
      <div className="w-1/2 " data-aos="fade-up">
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showLoginForm={showLoginForm} />
        )}
      </div>
      <section className="w-1/2 h-full bg-[#34180e]">
        <Image
          src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg"
          alt="تصویر قهوه"
          width={800}
          height={800}
          quality={100}
          priority
          className="h-full w-full object-cover "
        />
      </section>
    </div>
  );
};

export default Login_register;
