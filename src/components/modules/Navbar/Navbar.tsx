"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart, faShuffle, faCartShopping, faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { LuUser } from "react-icons/lu";



interface TPNavbar {
  userToken: string | undefined
}


function Navbar({ userToken }: TPNavbar) {
  const [fixToTop, setFixToTop] = useState(false)
  const [userInfo, setUserInfo] = useState<{ name: string; email: string; role: string } | null>(null)

  useEffect(() => {
    const verifyToken = async () => {
      if (!userToken) {
        setUserInfo(null);
        return;
      }

      try {
        const res = await fetch('/api/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: userToken }),
        });

        const data = await res.json();

        if (data.valid && data.user) {
          setUserInfo(data.user);
        } else {
          setUserInfo(null);
        }
      } catch (error) {
        setUserInfo(null);
      }
    };

    verifyToken();
  }, [userToken]);

  useEffect(() => {
    const handleFixToTop = () => {
      if (window.scrollY > 111) {
        setFixToTop(true)
      } else {
        setFixToTop(false)
      }
    }
    window.addEventListener('scroll', handleFixToTop)

    return () => removeEventListener('scroll', handleFixToTop)
  }, [])

  return (
    <nav className={`fixed z-50 w-full   duration-300 transition-all  ${fixToTop ? 'mt-0 bg-[#F5F0E6]' : 'mt-7'} flex items-center justify-center `}>
      <main className={`flex items-center  justify-center bg-[#F5F0E6]    ${fixToTop ? '' : 'shadow-lg '} `}>
        {/* logo coffee */}
        <div>
          <Link href={'/'}>
            <Image src={'/images/coffee_verna.png'} width={100} height={100} alt='logo website' />
          </Link>
        </div>
        {/* link coffee */}
        <div className='pr-10'>
          <ul className='flex justify-between gap-x-8 px-5 '>
            <li>
              <Link href={''}>
                صفحه اصلی
              </Link>
            </li>
            <li className='flex items-center justify-center '>
              <Link href={''}>
                فروشگاه
              </Link>
              <FontAwesomeIcon size='sm' className='px-1 pt-1 text-gray-600' icon={faAngleDown} />
            </li>
            <li><Link href={''}>فروش سازمانی</Link></li>
            <li className='flex items-center justify-center '>
              <Link href={''}>
                وبلاگ
              </Link>
              <FontAwesomeIcon size='sm' className='px-1 pt-1 text-gray-600' icon={faAngleDown} />
            </li>
            <li>
              <Link href={''}>

                دیکشنری قهوه
              </Link>
            </li>
            <li>
              <Link href={''}>

                تماس با ما
              </Link>
            </li>
            <li className='flex items-center justify-center '>
              <Link href={''}>
                درباره ما
              </Link>
              <FontAwesomeIcon size='sm' className='px-1 pt-1 text-gray-600' icon={faAngleDown} />
            </li>
            <li>
              <Link href={''}>

                باشگاه مشتریان
              </Link>
            </li>
          </ul>
        </div>
        {/* account link */}
        <div className='flex px-10 gap-x-6 justify-center items-center'>
          {userInfo ? (
            <div className="flex items-center cursor-pointer gap-2 bg-gray-100 rounded-lg px-4 py-2 w-fit">
              <LuUser className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium">سلام، محمدجواد</span>
            </div>
          ) : (
            <div className='flex justify-center items-center gap-x-2'>
              <Link href={'/login-register'}>ورود</Link>
              <span> {'/'}</span>
              <Link href={'/login-register'}> عضویت</Link>
            </div>
          )}
          <div className='flex items-center justify-center gap-x-7'>
            <Link className='relative' href={''}>
              <span className='absolute -top-3.5 -left-2.5 flex justify-center items-center bg-red-300 px-1.5 rounded-full'>{0}</span>
              <FontAwesomeIcon size={'lg'} icon={faHeart} /></Link>
            <Link className='relative' href={''}>
              <span className='absolute -top-3.5 -left-2.5 flex justify-center items-center bg-red-300 px-1.5 rounded-full'>{0}</span>
              <FontAwesomeIcon size={'lg'} icon={faShuffle} /></Link>
            <Link className='relative' href={''}>
              <span className='absolute -top-3.5 -left-2.5 flex justify-center items-center bg-red-300 px-1.5 rounded-full'>{0}</span>
              <FontAwesomeIcon size={'lg'} icon={faCartShopping} /></Link>
          </div>
        </div>

      </main>
    </nav>
  )
}

export default Navbar