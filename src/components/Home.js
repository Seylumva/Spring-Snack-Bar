const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__image">
          <div className="hero__text">
            <h1>Seasonal Strawberry Ice Cream</h1>
            <p>Available Now</p>
          </div>
          <img src="/images/ice-cream.jpg" alt="Strawberry Ice Cream" />
        </div>
      </section>
      <section className="coming-soon">
        <div className="container">
          <div className="coming-soon__header">
            <h2>Summer arrivals</h2>
            <p>Delicious treats are on their way</p>
          </div>

          <div className="coming-soon__arrivals">
            <div className="arrivals__sweets">
              <h3>Sweet Treats</h3>
              <ul className="arrivals__list">
                <li className="arrivals__list__item">
                  White Chocolate Strawberry Ice Cream
                </li>
                <li className="arrivals__list__item">
                  Seasonal Strawberry Ice Cream
                </li>
                <li className="arrivals__list__item">
                  Strawberry Daifuku Mochi
                </li>
                <li className="arrivals__list__item">Strawberry Shake</li>
                <li className="arrivals__list__item">Cherry Blossom Tea</li>
                <li className="arrivals__list__item">
                  Cherry Blossom Ice Cream Sandwich
                </li>
                <li className="arrivals__list__item">Cherry Blossom Kit-Kat</li>
                <li className="arrivals__list__item">Red Bean Taiyaki</li>
                <li className="arrivals__list__item">Kakigori</li>
              </ul>
            </div>
            <div className="arrivalss__savory">
              <h3>Savory Treats</h3>
              <ul>
                <li className="arrivals__list__item">Yakisoba</li>
                <li className="arrivals__list__item">Yakitori</li>
                <li className="arrivals__list__item">Takoyaki</li>
                <li className="arrivals__list__item">Okonomiyaki</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="notify">
        <header className="notify__header">
          <h2>Get notified!</h2>
          <p>Be the first to hear of our latest releases</p>
        </header>
        <form className="notify__form">
          <input type="email" />
          <button type="button">Subscribe</button>
        </form>
      </section>
    </main>
  );
};

export default Home;
