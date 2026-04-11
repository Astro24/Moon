import Hero from "@/app/components/deliveryInfo/Hero";
import OverView from "@/app/components/deliveryInfo/OverView";
import PackInfo from "@/app/components/deliveryInfo/PackInfo";

export default function DeliveryInfo() {
  return (
    <div>
        <Hero />
        <OverView />
        <PackInfo />
    </div>
  );
}