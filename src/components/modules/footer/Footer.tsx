import { MdOutlineCopyright } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Article from "./Article";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="space-y-6">
            <Image
              src="/images/logo_light.png"
              alt="Logo"
              width={150}
              height={50}
              className="object-contain"
            />
            <p className="text-lg font-medium">
              شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست
            </p>

            <div className="flex items-start gap-4">
              <FaRegHeart className="text-2xl mt-1" />
              <p>
                تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان.
                خیابان ماگنولیا بلوک آ117
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaRegHeart />
              <p>پیگیری سفارشات : 02188305827</p>
            </div>
            <div className="flex items-center gap-4">
              <FaRegHeart />
              <p>support [at] set-coffee.com</p>
            </div>
          </section>

          <section className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">جدیدترین نوشته ها</h4>
            <Article
              href={"/article/123"}
              date="۱۷ آبان ۱۴۰۲ "
              comments="بدون دیدگاه"
              img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
              title="افزایش انرژی با پودر قهوه فوری"
            />

            <hr className="border-gray-700" />

            <Article
              href={"/article/123"}
              date="۱۷ آبان ۱۴۰۲ "
              comments="بدون دیدگاه"
              img="https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg"
              title="افزایش انرژی با پودر قهوه فوری"
            />
          </section>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">منوی فوتر</h4>
              <ul className="space-y-2">
                <li>
                  <Link href={"/contact-us"} className="hover:text-gray-300 transition-colors">تماس با ما</Link>
                </li>
                <li>
                  <Link href={"/about-us"} className="hover:text-gray-300 transition-colors">درباره ما</Link>
                </li>
                <li>
                  <Link href={"/rules"} className="hover:text-gray-300 transition-colors">قوانین</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">دسترسی سریع</h4>
              <ul className="space-y-2">
                <li>
                  <Link href={"/category"} className="hover:text-gray-300 transition-colors">فروشگاه</Link>
                </li>
                <li>
                  <Link href={"/articles"} className="hover:text-gray-300 transition-colors">مقالات</Link>
                </li>
                <li>
                  <Link href={"/cart"} className="hover:text-gray-300 transition-colors">سبد خرید</Link>
                </li>
                <li>
                  <Link href={"/wishlist"} className="hover:text-gray-300 transition-colors">علاقه مندی ها</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <Image
            src="/images/license4.htm"
            width={76}
            height={76}
            alt="License 4"
          />
          <Image
            src="/images/license1.png"
            width={85}
            height={85}
            alt="License 1"
          />
          <Image
            src="/images/license3.png"
            width={85}
            height={85}
            alt="License 3"
          />
          <Image
            src="/images/license2.svg"
            width={62}
            height={95}
            alt="License 2"
          />
        </div>
      </main>

      <hr className="border-gray-700 my-8" />

      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400">
          2023
          <MdOutlineCopyright className="inline mx-1" />
          تمام حقوق متعلق است به <strong>قهوه ست</strong> |
          طراحی و اجرا <strong>نیلامارکتینگ</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;