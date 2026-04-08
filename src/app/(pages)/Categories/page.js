"use client";
export default function Categories() {
  return (
    <div>
      <section className="category-section">
        <div className="category-left">
          <h1>
            BROWSE OUR <br /> COLLECTION
          </h1>
          <button className="discover-btn">DISCOVER MORE</button>
        </div>

        <div className="category-right">
          <img src="/image 171.svg" alt="collection" />
        </div>
      </section>

      <section className="categories-cards-section">
        <div className="category-card">
          <img src="/Image (1).svg" alt="Tableware" />
          <div className="category-card-content">
            <h2>Tableware</h2>
            <p>Elegant essentials for everyday dining and special occasions</p>

            <div className="category-card-footer">
              <span>376 Products</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        <div className="category-card">
          <img src="/Image (2).svg" alt="Holiday" />
          <div className="category-card-content">
            <h2>Holiday</h2>
            <p>Festive ceramics crafted to celebrate every season</p>

            <div className="category-card-footer">
              <span>130 Products</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        <div className="category-card">
          <img src="/Image (3).svg" alt="Home Decor" />
          <div className="category-card-content">
            <h2>Home Decor</h2>
            <p>Timeless pieces to elevate your living spaces</p>

            <div className="category-card-footer">
              <span>457 Products</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-cards-section">
        <div className="category-card">
          <img src="/Image (4).svg" alt="Tableware" />
          <div className="category-card-content">
            <h2>Collection</h2>
            <p>Curated series showcasing our finest designs</p>

            <div className="category-card-footer">
              <span>58 Products</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        <div className="category-card">
          <img src="/Image (5).svg" alt="Holiday" />
          <div className="category-card-content">
            <h2>Dinner Sets</h2>
            <p>Complete ceramic sets designed for perfect table harmony</p>

            <div className="category-card-footer">
              <span>142 Products</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>

        <div className="category-card">
          <img src="/Image (6).svg" alt="Home Decor" />
          <div className="category-card-content">
            <h2>Kitchen Essentials</h2>
            <p>Functional ceramics crafted for daily use</p>

            <div className="category-card-footer">
              <span>673 Products</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <p className="newsletter-subtitle">Sign up for emails</p>
        <h2 className="newsletter-title">FOR NEWS, COLLECTIONS & MORE</h2>

        <input
          type="email"
          placeholder="Enter your email address"
          className="newsletter-input"
        />

        <button className="newsletter-btn">SIGN UP</button>
      </section>

      <style jsx>{`
        .category-section {
          width: 100%;
          height: 80vh;
          display: flex;
        }

        .category-left {
          width: 40%;
          background-color: #9f7b61;
          color: white;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          text-align: center;
        }

        .category-left h1 {
          font-size: 38px;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .discover-btn {
          background-color: white;
          color: #9f7b61;
          border: none;
          padding: 10px 20px;
          font-weight: bold;
          cursor: pointer;
        }

        .category-right {
          width: 60%;
        }

        .category-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .category-left h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .categories-cards-section {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 28px;
          padding: 70px 80px;
          background-color: #ffffff;
          box-sizing: border-box;
        }

        .category-card {
          width: 360px;
          background-color: #fff;
          border: 1px solid #eeeeee;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);

          display: flex;
          flex-direction: column;
        }

        .category-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        .category-card-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .category-card-content h2 {
          font-size: 20px;
          font-weight: 700;
          color: #222222;
          margin: 0 0 8px;
        }

        .category-card-content p {
          font-size: 14px;
          color: #7a7a7a;
          line-height: 1.5;
          margin: 0 0 24px;
        }

        .category-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .category-card-footer span:first-child {
          font-size: 16px;
          font-weight: 700;
          color: #222222;
        }

        .arrow {
          transition: 0.3s;
        }

        .category-card:hover .arrow {
          transform: translateX(5px);
        }

        .newsletter-section {
          width: 100%;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          text-align: center;
        }

        .newsletter-subtitle {
          font-size: 14px;
          color: #5b5b5b;
          margin: 0 0 18px 0;
        }

        .newsletter-title {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          font-weight: 600;
          color: #3f3a48;
          letter-spacing: 1px;
          margin: 0 0 35px 0;
          text-transform: uppercase;
        }

        .newsletter-input {
          width: 390px;
          border: none;
          border-bottom: 1px solid #8f8f8f;
          background: transparent;
          text-align: center;
          font-size: 15px;
          padding: 12px 10px;
          outline: none;
          margin-bottom: 26px;
        }

        .newsletter-input::placeholder {
          color: #7a7a7a;
        }

        .newsletter-btn {
          background-color: transparent;
          border: 1px solid #8f8f8f;
          padding: 12px 28px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #3f3a48;
          cursor: pointer;
          transition: 0.3s;
        }

        .newsletter-btn:hover {
          background-color: #3f3a48;
          color: white;
        }


        @media (max-width: 1024px) {
  .categories-cards-section {
    padding: 50px 30px;
    gap: 20px;
    flex-wrap: wrap;
  }

  .category-card {
    width: 300px;
  }

  .newsletter-input {
    width: 320px;
  }
}

@media (max-width: 768px) {
  .category-section {
    flex-direction: column;
    height: auto;
  }

  .category-left,
  .category-right {
    width: 100%;
  }

  .category-left {
    min-height: 260px;
    padding: 40px 20px;
  }

  .category-left h1 {
    font-size: 30px;
    line-height: 1.3;
  }

  .discover-btn {
    padding: 10px 18px;
    font-size: 12px;
  }

  .category-right img {
    width: 100%;
    height: auto;
    display: block;
  }

  .categories-cards-section {
    flex-direction: column;
    align-items: center;
    padding: 35px 20px;
    gap: 20px;
  }

  .category-card {
    width: 100%;
    max-width: 340px;
  }

  .category-card img {
    height: auto;
  }

  .newsletter-section {
    padding: 60px 20px;
  }

  .newsletter-title {
    font-size: 22px;
    line-height: 1.4;
  }

  .newsletter-input {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .category-left {
    min-height: 220px;
    padding: 30px 16px;
  }

  .category-left h1 {
    font-size: 24px;
    letter-spacing: 2px;
  }

  .discover-btn {
    font-size: 11px;
    padding: 9px 16px;
  }

  .categories-cards-section {
    padding: 25px 16px;
    gap: 16px;
  }

  .category-card {
    max-width: 100%;
    border-radius: 14px;
  }

  .category-card-content {
    padding: 14px;
  }

  .category-card-content h2 {
    font-size: 18px;
  }

  .category-card-content p {
    font-size: 13px;
    margin-bottom: 18px;
  }

  .category-card-footer span:first-child {
    font-size: 14px;
  }

  .newsletter-subtitle {
    font-size: 13px;
  }

  .newsletter-title {
    font-size: 19px;
  }

  .newsletter-input {
    max-width: 100%;
    font-size: 14px;
  }

  .newsletter-btn {
    padding: 10px 22px;
    font-size: 10px;
  }
}
      `}</style>
    </div>
  );
}