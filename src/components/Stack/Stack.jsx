import "./Stack.css";

function Stack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack">
      <div className="stack-header">
        <div>
          <p>Your Stack</p>
          <span>{stack.length} Technologies</span>
        </div>

        <button onClick={onRemoveAll}>Remove All</button>
      </div>

      <div className="stack-list">
        {stack.length === 0 ? (
          <div className="empty-stack">
            <p>Your stack is empty</p>
            <span>Add technologies to build your stack.</span>
          </div>
        ) : (
          stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <div className="stack-item-info">
                <img src={technology.image} alt={technology.name} />

                <div>
                  <h4>{technology.name}</h4>
                  <span>{technology.category}</span>
                </div>
              </div>

              <button onClick={() => onRemove(technology.id)}>×</button>
            </div>
          ))
        )}
      </div>
    </aside>
  );
}

export default Stack;