import "../App.css";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router";

function Home() {
  return (
    <div className="App">
      <section className="hero-section">
        <div className="hero-content">
          <span className="greeting">Hello, I'm</span>
          <h1>Mahfujur Rahman</h1>
          <h2>Full Stack Developer</h2>
          <p className="bio">
            I craft robust web solutions with modern technologies. Specialized
            in building scalable applications with cutting-edge tools.
          </p>
          <div className="tech-stack">
            <span className="tech-title">Tech Stack:</span>
            <div className="tech-list">
              <span className="tech-item">Laravel</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">Vue.js</span>
              <span className="tech-item">Nuxt.js</span>
              <span className="tech-item">React</span>
            </div>
          </div>
          <div className="cta-buttons">
            <Link to="/expense">Expense</Link>
            <button className="primary-btn">View Projects</button>
            <button className="secondary-btn">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={reactLogo} alt="React Logo" className="react-logo" />
        </div>
      </section>
    </div>
  );
}

export default Home;
