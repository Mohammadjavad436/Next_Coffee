import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import Product from "@/components/modules/product/Product";

const Latest = () => {
    return (
        <div>
            <section className="flex justify-between items-center px-32 py-10">
                <div className="flex flex-col items-center justify-between">
                    <p className="text-4xl">انواع قهوه</p>
                    <span className="py-3">Type Of Coffee</span>
                </div>
                <Link className="flex items-center gap-2.5 justify-between" href={"/category"}>
                    <p>
                        مشاهده همه
                    </p>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
            </section >
            <main data-aos="fade-up" className="flex items-center justify-center  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 max-w-5/6 ">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </main>
        </div >
    );
};

export default Latest;
