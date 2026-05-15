import profile from "../assets/profile.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <img src={profile} alt="profile" className="about-img" />


        <p>
          Hello! I'm Neha, a frontend developer learning React JS and building
          responsive websites.
        </p>
        <div className="skills">
          <h2>Skills</h2>

          <div className="skill">
            <p>HTML</p>

            <div className="progress">
              <div className="html"></div>
            </div>
          </div>

          <div className="skill">
            <p>CSS</p>

            <div className="progress">
              <div className="css"></div>
            </div>
          </div>

          <div className="skill">
            <p>React JS</p>

            <div className="progress">
              <div className="react"></div>
            </div>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>

          <div className="edu-card">
            <h3>BCA</h3>

            <p>Bachelor of Computer Applications</p>
          </div>
{/* 
          <div className="edu-card">
            <h3>12th Class</h3>

            <p>Completed in 2023 with 77%</p>
          </div>

          <div className="edu-card">
            <h3>10th Class</h3>

            <p>Completed in 2021 with 87%</p>
          </div> */}
        </div>
        <a href="/resume.pdf" download>
          <button>Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default About;
