import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart, faShuffle, faCartShopping, faAngleDown
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className='fixed w-full mt-7 flex items-center justify-center   '>
      <main className='flex items-center justify-center bg-gray-300 shadow-lg'>
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
          <div className='flex justify-center items-center gap-x-2'>
            <Link href={''}>ورود</Link >
            <span> {'/'}</span>
            <Link href={''}> عضویت</Link >
          </div>
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