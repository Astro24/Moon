import Image from 'next/image';

export default function About() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      
      {/* 1. قسم العنوان الرئيسي */}
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2 style={{ letterSpacing: '4px', fontSize: '28px', marginBottom: '15px' }}>ABOUT MOON</h2>
        <p style={{ color: '#888', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
          Moon's handmade ceramic products have been around since 1650, let's explore our journey.
        </p>
      </div>

      {/* 2. قسم الخط الزمني (Timeline) */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* 1910 - نص يسار صورة يمين */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', paddingRight: '40px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>1910</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            {/* استخدام Image بدلاً من img مع إضافة / قبل اسم الصورة */}
            <Image src="/jar.svg" alt="Ceramic 1910" width={500} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>

        {/* 1990 - صورة يسار نص يمين */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', marginBottom: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', paddingLeft: '40px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>1990</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
              Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Image src="/jar2.svg" alt="Ceramic 1990" width={500} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>

        {/* 2010 - نص يسار صورة يمين */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '100px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', paddingRight: '40px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '15px' }}>2010</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666' }}>
              Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus. sit aliquam sit nullam neque ultrices.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <Image src="/j-plate1.svg" alt="Ceramic 2010" width={500} height={400} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </div>
      
      {/* 3. قسم آلية العمل (HOW WE WORK) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        maxWidth: '1000px', 
        margin: '0 auto 100px', 
        border: '1px solid #eee',
        overflow: 'hidden'
      }}>
        <div style={{ flex: 1.2, minWidth: '300px' }}>
          <Image 
            src="/j-plate2.svg" 
            alt="Process" 
            width={600}
            height={500}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          />
        </div>

        <div style={{ flex: 1, padding: '50px', textAlign: 'left', backgroundColor: '#fafafa', minWidth: '300px' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '35px', fontWeight: 'bold', letterSpacing: '1px' }}>HOW WE WORK</h3>
          
          {[
            { title: "Product design", desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis." },
            { title: "Crafted", desc: "Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus." },
            { title: "Sell product", desc: "Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi." }
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: i === 2 ? 0 : '25px' }}>
              <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#000', fontWeight: '600' }}>{item.title}</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. قسم فريق العمل */}
      <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ marginBottom: '50px', letterSpacing: '2px', fontSize: '22px' }}>MEET OUR TEAM</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { img: "j-prs1.svg", name: "BERNIE PATTERSON", role: "CEO & Founder" },
            { img: "j-prs2.svg", name: "HUNCHO VASE", role: "Creative Director" },
            { img: "j-prs3.svg", name: "CORBIN JACK", role: "Artist" },
            { img: "j-prs4.svg", name: "SEREN BOWL", role: "Marketing" }
          ].map((member, index) => (
            <div key={index} style={{ flex: '1 1 200px', maxWidth: '250px' }}>
              <Image src={`/${member.img}`} alt={member.name} width={250} height={250} style={{ width: '100%', borderRadius: '4px', marginBottom: '15px', height: 'auto' }} />
              <h4 style={{ fontSize: '14px', margin: '5px 0', fontWeight: 'bold' }}>{member.name}</h4>
              <span style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase' }}>{member.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. قسم الاشتراك في النشرة البريدية */}
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: '#777' }}>Sign up for emails</p>
        <h2 style={{ margin: '15px 0 40px', fontSize: '24px', fontWeight: '500' }}>FOR NEWS, COLLECTIONS & MORE</h2>
        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #000', maxWidth: '450px', margin: '0 auto', paddingBottom: '8px' }}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            style={{ border: 'none', outline: 'none', flex: 1, fontSize: '14px', background: 'transparent' }} 
          />
          <button style={{ background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', letterSpacing: '1px' }}>SIGN UP</button>
        </div>
      </div>

    </div>
  );
}


