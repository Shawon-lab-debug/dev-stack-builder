import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tag">BUILD YOUR STACK</p>

          <h1>
            Build Your Ideal
            <span> Development Stack</span>
          </h1>

          <p className="hero-description">
            Discover and organize the technologies you need to build amazing
            projects. Create your personalized development stack and start
            building today.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="hero-primary-btn">
              Explore Technologies
            </a>

            <a href="#about" className="hero-secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/assets/banner-stack.png" alt="Development Stack" />
        </div>
      </div>
    </section>
  );
}

export default Hero;