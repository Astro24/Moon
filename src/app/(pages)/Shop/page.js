"use client";

import { Suspense } from "react";
import ShopContent from "@/app/components/shop/ShopContent";

export default function Shop() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
