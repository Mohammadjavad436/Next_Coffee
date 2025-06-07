import styles from "@/styles/product.module.css";
import Gallery from "@/components/templates/product/Gallery";
import Details from "@/components/templates/product/Details";
import Tabs from "@/components/templates/product/Tabs";
import MoreProducts from "@/components/templates/product/MoreProducts";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import { cookies } from "next/headers";
import productModel from '@/models/Product'
import connectToDB from "@/config/db";


const product = async ({ params }: { params: { id: string } }) => {
  await connectToDB();
  const cookiesStore = await cookies();
  const userToken = cookiesStore.get('token')?.value;

  const { id } = await params


  const productData = await productModel
    .findOne({ _id: id })
    .populate({
      path: 'comments',
      options: { limit: 50 } // محدود کنید
    })


  return (
    <div className={styles.container}>
      <Navbar userToken={userToken} />
      <div data-aos="fade-up" className={styles.contents}>
        <div className={styles.main}>
          <Details productDetail={productData} />
          <Gallery />
        </div>
        <Tabs productComments={JSON.parse(JSON.stringify(productData))} />
        <MoreProducts />
      </div>
      <Footer />
    </div>
  );
};

export default product;
