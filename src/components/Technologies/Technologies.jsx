import technologies from "../../data/technologies.json";
import TechnologyCard from "../TechnologyCard/technologycard";
import "./Technologies.css";

function Technologies() {
  return (
    <section className="technologies" id="technologies">
      <div className="technologies-container">
        <div className="section-heading">
          <p>EXPLORE TECHNOLOGIES</p>
          <h2>Choose Your <span>Tech Stack</span></h2>
          <p>
            Explore popular technologies and build your personalized
            development stack.
          </p>
        </div>

        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;