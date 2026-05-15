import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-container">

      <div className="home-content">

        <h1>
          Hi, I'm Neha
        </h1>

        <h2>
          React Developer
        </h2>

        <p>
          I am a frontend developer learning React and building
          responsive web applications.
        </p>

        <Link to="/contact">
  <button>Hire Me</button>
</Link>

      </div>

    </div>
  );
}

export default Home;