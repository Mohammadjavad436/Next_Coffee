import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import { Banner } from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies()
  const userToken = cookieStore.get('token')?.value


  return (
    <div>
      <Navbar userToken={userToken} />
      <Banner />
      <Latest />
      <Promote />
      <Articles />
      <Footer />
    </div>
  );
}
