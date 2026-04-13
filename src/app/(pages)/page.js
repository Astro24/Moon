import Hero from "@/app/components/home/Hero";
import Cat from "../components/home/Cat";
import BestSellers from "../components/home/BestSellers";
import History from "../components/home/History";
import New from "../components/home/New";
import Newsletter from "../components/shared/NewsLetter";
import InfoHomePage from "../components/home/Info";
import Products from "../components/shared/Products";
export default function Home() {
  return (
    <main>
      <Hero />
      <Cat />
      <InfoHomePage variant="sales" />
      <Products filter="bestSeller" title={"Best Seller"} limit={8} />
      <History />
      <Products filter="new" title={"Discover new arrivals"} limit={8} />
      <InfoHomePage variant="ourBlog" />
      <Newsletter />
    </main>
  );
}
