import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
    title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
    return (
        <section className="flex items-center rtl mb-4 text-[15px] gap-[9px]">
            <Link href="/" className="text-[rgb(144,140,140)]">
                خانه{" "}
            </Link>
            <span className="relative top-0.5">/</span>
            <Link href="/" className="text-[rgb(144,140,140)]">
                همه موارد{" "}
            </Link>
            <span className="relative top-0.5">/</span>
            <p>{title}</p>
        </section>
    );
};

export default Breadcrumb; 