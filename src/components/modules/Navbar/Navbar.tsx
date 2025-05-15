import React from 'react'

function Navbar() {
  return (
    <nav className='sticky !mt-7 !mx-10 m bg-gray-400 drop-shadow-amber-100 '>
      <main className='flex '>
        {/* logo coffee */}
        <div>

        </div>
        {/* link coffee */}
        <div>
          <ul className='flex'>
            <li>صفحه اصلی </li>
            <li> فروشگاه </li>
            <li>فروش سازمانی</li>
            <li>وبلاگ</li>
            <li>دیکشنری قهوه</li>
            <li>تماس با ما </li>
            <li>درباره ما</li>
            <li>باشگاه مشتریان</li>
          </ul>
        </div>
        {/* account link */}
        <div>
          <div>
            <span>ورود</span>
            <span> عضویت</span>
          </div>
        </div>

      </main>
    </nav>
  )
}

export default Navbar