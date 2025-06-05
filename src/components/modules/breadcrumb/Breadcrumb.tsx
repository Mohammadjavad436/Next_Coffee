import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
    route: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ route }) => {
    return (
        <div
            className="bg-[url('https://set-coffee.com/wp-content/uploads/2022/06/back1.jpg')] bg-cover bg-center mb-10 px-[60px] pt-[182px]"
        >
            <p className="text-center text-[4.4rem]">{route}</p>
            <div className="flex items-center justify-center flex-row-reverse gap-[6px] pb-[3.8rem]">
                <Link href="/" className="inline-block my-[5px] uppercase text-sm leading-[1.2]">
                    خانه
                </Link>
                <span>/</span>
                <p className="inline-block my-[5px] uppercase text-sm leading-[1.2]">{route}</p>
            </div>
        </div>
    );
};

export default Breadcrumb; 