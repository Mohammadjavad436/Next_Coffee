import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart, faShuffle, faHeart, faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

interface ProductCardProps {
    // TODO: Define props based on product data (e.g., product object)
    imageUrl?: string;
    persianName?: string;
    englishDetails?: string;
    price?: string;
    // TODO: Add props for rating, icons, etc.
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl = '/images/ProductImage.jpg', // Placeholder image
    persianName = 'نام محصول فارسی', // Placeholder Persian name
    price = '520,000 تومان ', // Placeholder price
    // TODO: Destructure other props here
}) => {
    return (
        <div className="max-w-xs mx-auto overflow-hidden transform  transition-all duration-300">
            <div className='relative group h-60'>
                <Image quality={100} width={100} height={100} className="w-full h-full z-0 object-cover " src={imageUrl} alt={persianName} />
                <div className='bg-gray-500 flex hover:cursor-pointer absolute left-0 top-0 h-full w-full opacity-0 z-10 group-hover:opacity-75 transition-all duration-300 ease-in-out'>
                    <div className='flex w-full flex-col items-center justify-center'>
                        <div className='hover:cursor-pointer group/item border-2 text-amber-50 border-amber-50 w-20 h-16 flex flex-col justify-center items-center transition-all duration-300 hover:bg-amber-50 hover:text-gray-900'>
                            <div className='group-hover/item:opacity-0 group-hover/item:scale-0 transition-all duration-300 absolute'>
                                <p>انتخاب </p>
                                <p>گزینه ها</p>
                            </div>
                            <div className='opacity-0  group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300 absolute'><FontAwesomeIcon icon={faShoppingCart} /></div>
                        </div>
                    </div>
                    <div className='space-y-2  px-2 flex flex-col items-center pt-4 gap-y-2'>
                        <span className=' block'><FontAwesomeIcon className='fa-lg text-amber-50' icon={faShuffle} /></span>
                        <span className=' block '><FontAwesomeIcon className='fa-lg text-amber-50' icon={faMagnifyingGlass} /></span>
                        <span className=' block'><FontAwesomeIcon className='fa-lg text-amber-50' icon={faHeart} /></span>
                    </div>
                </div>
            </div>
            <div className="p-4 text-center">
                <p className="text-gray-600 text-sm mb-2  ">قهوه رواندا اسپشالیتی RWANDA Natural Gitoki مقدار 250 گرم</p>
                <div className="flex items-center justify-center mb-2 text-yellow-500">
                    <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                </div>
                <div className="text-gray-900 font-bold text-lg mb-4 ">{price}</div>
            </div>
        </div>
    );
};

export default ProductCard;