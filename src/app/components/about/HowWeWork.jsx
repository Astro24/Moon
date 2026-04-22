import Image from "next/image";

// TODO: Convert inline styles to Tailwind.
// TODO: Extract the array into a const above the component (avoids
// recreating it on every render and makes the JSX cleaner).
export default function HowWeWork() {
  return (
    <section>
      {/* 3. قسم آلية العمل (HOW WE WORK) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto 100px",
          border: "1px solid #eee",
          overflow: "hidden",
        }}
      >
        <div style={{ flex: 1.2, minWidth: "300px" }}>
          <Image
            src="/about/j-plate2.svg"
            alt="Process"
            width={600}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            padding: "50px",
            textAlign: "left",
            backgroundColor: "#fafafa",
            minWidth: "300px",
          }}
        >
          <h3
            style={{
              fontSize: "22px",
              marginBottom: "35px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            HOW WE WORK
          </h3>

          {[
            {
              title: "Product design",
              desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.",
            },
            {
              title: "Crafted",
              desc: "Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.",
            },
            {
              title: "Sell product",
              desc: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: i === 2 ? 0 : "25px" }}>
              <h4
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  color: "#000",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  color: "#666",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
