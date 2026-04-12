import Hero from "@/app/components/home/Hero";
import Cat from "../components/home/Cat";
import BestSellers from "../components/home/BestSellers";
import History from "../components/home/History";
import New from "../components/home/New";
import Newsletter from "../components/shared/NewsLetter";
import InfoHomePage from "../components/home/Info";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cat />
      <InfoHomePage variant="sales" />
      <BestSellers />
      <History />
      <New />
      <InfoHomePage variant="ourBlog" />
      <Newsletter />
    </main>
  );
}
