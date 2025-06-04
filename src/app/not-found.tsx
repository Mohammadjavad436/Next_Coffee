import React from 'react'
import { cookies } from 'next/headers'
import Navbar from '@/components/modules/navbar/Navbar'
import Footer from '@/components/modules/footer/Footer'
import Link from 'next/link'


const notFound = async () => {
    const cookieStore = await cookies()
    const userToken = cookieStore.get('token')?.value


    return (
        <>
            <Navbar userToken={userToken} />
            <div className="bg-gray-100">
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-8xl font-bold text-gray-800">404</h1>
                    <p className="text-4xl font-medium text-gray-800">صفحه مورد نظر پیدا نشد</p>
                    <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">برگشت به صفحه اصلی</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default notFound