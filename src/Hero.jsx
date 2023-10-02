import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Cold-pressed plaid you probably haven't heard of them slow-carb,
            fanny pack forage pok pok ramps chillwave sustainable fam. Chambray
            wayfarers vinyl umami normcore kombucha cronut ramps farm-to-table
            freegan chicharrones selvage viral banh mi. Bodega boys vegan
            microdosing asymmetrical thundercats. Squid yr prism chambray.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
