"use client";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { useSelectedLayoutSegment } from "next/navigation";
import { useContext, useRef } from "react";

// This is importent needs to uncomment before production it do all the animation
// I did comment it for developing fast cuz frozen needed to soomth animation but while working it needs to be off so I don't refresh anytime I do small changes

// function FrozenRouter({ children }) {
//   const context = useContext(LayoutRouterContext);
//   const frozen = useRef(context).current;

//   return (
//     // <LayoutRouterContext.Provider value={frozen}>
//     //   {children}
//     // </LayoutRouterContext.Provider>
//   );
// }

export default function PageTransition({ children }) {
  const segment = useSelectedLayoutSegment();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={segment}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {children}

        {/* children needs to be warp with <FrozenRouter> but I deleted it for now */}
      </motion.div>
    </AnimatePresence>
  );
}
