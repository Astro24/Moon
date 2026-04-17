import Hero from "@/app/components/deliveryInfo/Hero";
import Instructions from "@/app/components/deliveryInfo/Instructions";
import OverView from "@/app/components/deliveryInfo/OverView";
import PackInfo from "@/app/components/deliveryInfo/PackInfo";

export default function DeliveryInfo() {
  return (
    <div>
        <Hero />
        <OverView />
        <PackInfo />
        <Instructions />
    </div>
  );
}