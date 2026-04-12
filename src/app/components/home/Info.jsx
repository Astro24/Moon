import FeatureRow from "@/app/components/shared/FeatureRow";
import { ourBlogFeature, saleFeature } from "../../../../lib/data";

export default function InfoHomePage({ variant = "sales" }) {
  if (variant === "sales") {
    return (
      <section className="mx-4 md:mx-10} lg:mx-45 my-35 overflow-hidden">
        <FeatureRow
          title={saleFeature.title}
          text={saleFeature.text}
          image={saleFeature.image}
          link={saleFeature.link}
        />
      </section>
    );
  }

  return (
    <section className="mx-4 md:mx-10} lg:mx-45 my-35 overflow-hidden">
      <FeatureRow
        kicker={ourBlogFeature.kicker}
        title={ourBlogFeature.title}
        text={ourBlogFeature.text}
        image={ourBlogFeature.image}
        link={ourBlogFeature.link}
      />
    </section>
  );
}
