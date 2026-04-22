import FeatureRow from "@/app/components/shared/FeatureRow";
import { historyRows } from "../../../../lib/data";

export default function History() {
  return (
    <section className="mx-4 md:mx-10 lg:mx-45 my-35 flex flex-col overflow-hidden">
      {historyRows.map((row, i) => (
        <FeatureRow
          key={i}
          title={row.title}
          text={row.text}
          image={row.image}
          link={row.link}
          reversed={i % 2 === 1}
        />
      ))}
    </section>
  );
}
