import Hero from "@/app/components/home/Hero";
import Cat from "../components/home/Cat";
import Sales from "../components/home/Sales";
import BestSellers from "../components/home/BestSellers";
import History from "../components/home/History";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cat />
      <Sales />
      <BestSellers />
      <History />
    </main>
  );
}
