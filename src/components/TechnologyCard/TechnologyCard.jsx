import "./TechnologyCard.css";

function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <div className="technology-image">
          <img src={technology.image} alt={technology.name} />
        </div>

        {technology.badge && (
          <span className={`technology-badge badge-${technology.id}`}>
            {technology.badge}
          </span>
        )}
      </div>

      <div className="technology-content">
        <span className="technology-category">{technology.category}</span>

        <h3>{technology.name}</h3>

        <p>{technology.description}</p>

        <div className="technology-meta">
          <span className="difficulty">{technology.difficulty}</span>

          <span className="rating">
            <span className="star">★</span>
            {technology.rating}
          </span>
        </div>

        <button
          className={`add-stack-btn ${isAdded ? "added" : ""}`}
          onClick={() => onAdd(technology)}
          disabled={isAdded}
        >
          {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;