import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import technologies from "../../data/technologies.json";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import Stack from "../Stack/Stack";
import "./Technologies.css";

function Technologies() {
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAdd = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);
    toast.success("All technologies removed from your stack.");
  };

  return (
    <section className="technologies" id="technologies">
      <div className="technologies-container">
        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="technologies-layout">
          <div className="technology-grid">
            {loading ? (
              <div className="loading">
                <div className="loader"></div>
                <p>Loading technologies...</p>
              </div>
            ) : (
              technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAdd}
                  isAdded={stack.some((item) => item.id === technology.id)}
                />
              ))
            )}
          </div>

          <Stack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
}

export default Technologies;