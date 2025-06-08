import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Product from "@/components/modules/product/Product";
import styles from "@/styles/wishlist.module.css";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { cookies } from "next/headers";

interface IProduct {
    _id: string;
    name: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    weight: number;
    suitableFor: string;
    smell: string;
    score: number;
    tags: string[];
    comments: string[];
    __v: number;
}

interface IWish {
    _id: string;
    user: string;
    product: IProduct;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const page = async () => {
    const userToken = (await cookies()).get('token')?.value
    let wishes: IWish[] = [];

    if (userToken) {
        try {
            const response = await fetch('http://localhost:3000/api/wishlist/getWishlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: userToken }),
            });
            const res = await response.json();
            wishes = res.data;
        } catch (err) {
            console.error('خطا در دریافت داده:', err);
        }
    }

    return (
        <>
            <Navbar userToken={userToken} />
            <Breadcrumb route={"علاقه مندی ها"} />
            <main className={styles.container} data-aos="fade-up">
                <p className={styles.title}>محصولات مورد علاقه شما</p>
                <section>
                    {wishes.map((wish: IWish) => (
                        <Product key={wish._id} persianName={wish.product.name} englishDetails=""  {...wish.product} price={wish.product.price.toString()} />
                    ))}
                </section>
            </main>

            {wishes.length === 0 && (
                <div className={styles.wishlist_empty} data-aos="fade-up">
                    <FaRegHeart />
                    <p>محصولی یافت نشد</p>
                    <span>شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید.</span>
                    <span>در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.</span>
                    <div>
                        <Link href="/category">بازگشت به فروشگاه</Link>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default page;
