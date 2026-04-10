import Hero from "@/app/components/home/Hero";
import Cat from "../components/home/Cat";
import Sales from "../components/home/Sales";
import BestSellers from "../components/home/BestSellers";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cat />
      <Sales />
      <BestSellers />
    </main>
  );
}
