import hostel from "../assets/hostel.png";
function Project() {
  return (
    <div className="project-container">
      <div className="project-grid">
        {/* add projects  */}
        <div className="project-card">
          <img src={hostel} alt="project" />
          <h2>Hostel Management System</h2>

          <p>
            A React based hostel management system with student and admin
            modules.
          </p>

          <h3>Tech Stack</h3>

          <p>React JS, CSS, Node JS, MySQL</p>

          <div className="project-buttons">
            <a
              href="https://github.com/njat8702/hostel-management-system.git"
              target="_blank">
              <button>GitHub</button>
            </a>
            <a href="https://hostel-management.vercel.app" target="_blank">
              <button>Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
