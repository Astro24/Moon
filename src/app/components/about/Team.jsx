import Image from "next/image";

// TODO: Convert inline styles to Tailwind.
// TODO: Extract the array into a const above the component (avoids
// recreating it on every render and makes the JSX cleaner).
export default function Team() {
  return (
    <section>
      {/* 4. قسم فريق العمل */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h3
          style={{
            marginBottom: "50px",
            letterSpacing: "2px",
            fontSize: "22px",
          }}
        >
          MEET OUR TEAM
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            {
              img: "about/j-prs1.svg",
              name: "BERNIE PATTERSON",
              role: "CEO & Founder",
            },
            {
              img: "about/j-prs2.svg",
              name: "HUNCHO VASE",
              role: "Creative Director",
            },
            { img: "about/j-prs3.svg", name: "CORBIN JACK", role: "Artist" },
            { img: "about/j-prs4.svg", name: "SEREN BOWL", role: "Marketing" },
          ].map((member, index) => (
            <div key={index} style={{ flex: "1 1 200px", maxWidth: "250px" }}>
              <Image
                src={`/${member.img}`}
                alt={member.name}
                width={250}
                height={250}
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "15px",
                  height: "auto",
                }}
              />
              <h4
                style={{
                  fontSize: "14px",
                  margin: "5px 0",
                  fontWeight: "bold",
                }}
              >
                {member.name}
              </h4>
              <span
                style={{
                  fontSize: "12px",
                  color: "#999",
                  textTransform: "uppercase",
                }}
              >
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
