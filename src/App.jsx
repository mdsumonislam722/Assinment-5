import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Technology data could not be loaded.");
        setLoading(false);
      });
  }, []);

  const addToStack = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack.");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const removedTechnology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="mobile-menu">☰</div>

        <a href="#home" className="brand">
          <span className="brand-logo">DS</span>
          <span className="brand-name">Dev Stack</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="primary-button sign-up">Sign Up</button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>
              Build Your Ideal
              <span className="gradient-text"> Development Stack</span>
            </h1>

            <p>
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="hero-buttons">
              <a href="#technologies" className="primary-button">
                Explore Technologies
              </a>

              <a href="#technologies" className="secondary-button">
                Learn More
              </a>
            </div>
          </div>

          <div className="hero-image">
  <img src="/src/assets/hero.png" alt="Dev Stack" />
</div>
        </section>

        {/* Technologies */}
        <section className="technologies-section" id="technologies">
          <div className="section-title">
            <h2>
              Explore the <span className="gradient-text">Technologies</span>
            </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          <div className="content-layout">
            <div className="technology-grid">
              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  <p>Please wait, technologies are loading...</p>
                </div>
              ) : (
                technologies.map((technology) => {
                  const isAdded = stack.some(
                    (item) => item.id === technology.id
                  );

                  return (
                    <div className="technology-card" key={technology.id}>
                      <div className="card-header">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="technology-icon"
                        />

                        <span className="badge">{technology.badge}</span>
                      </div>

                      <h3>{technology.name}</h3>

                      <p className="card-description">
                        {technology.description}
                      </p>

                      <div className="card-details">
                        <span className="category">
                          {technology.category}
                        </span>

                        <span>{technology.difficulty}</span>

                        <span className="rating">
                          ★ {technology.rating}
                        </span>
                      </div>

                      <button
                        className={`add-button ${
                          isAdded ? "added-button" : ""
                        }`}
                        disabled={isAdded}
                        onClick={() => addToStack(technology)}
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            {/* Your Stack */}
            <aside className="stack-section">
              <h2>Your Stack</h2>

              <p className="selected-text">
  {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
</p>

              {stack.length === 0 ? (
                <div className="empty-stack">
                  <p>Your stack is empty.</p>
                  <span>Add technologies from the list.</span>
                </div>
              ) : (
                <div className="stack-list">
                  {stack.map((technology) => (
                    <div className="stack-item" key={technology.id}>
                      <img
                        src={technology.icon}
                        alt={technology.name}
                      />

                      <div className="stack-info">
                        <strong>{technology.name}</strong>
                        <span>{technology.category}</span>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() => removeFromStack(technology.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  <button className="remove-all" onClick={removeAll}>
                    Remove All
                  </button>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-logo">DS</span>
              <span className="brand-name">Dev Stack</span>
            </a>

            <p>
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="social-links">
              <a href="https://github.com" target="_blank">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>PRODUCT</h4>
            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="footer-links">
            <h4>COMPANY</h4>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h4>LEGAL</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dev Stack. All rights reserved.</span>

          <div>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </footer>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;