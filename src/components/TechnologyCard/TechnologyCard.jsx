import "./TechnologyCard.css";

function TechnologyCard({ technology, onAdd, isAdded }) {
  return (
    <article className="technology-card">
      <div className="technology-image">
        <img src={technology.image} alt={technology.name} />
      </div>

      <div className="technology-content">
        <span className="technology-category">{technology.category}</span>

        <h3>{technology.name}</h3>

        <p>{technology.description}</p>

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