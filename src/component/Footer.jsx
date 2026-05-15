import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Neha Portfolio</h2>

      <p>
        © 2026 All Rights Reserved
      </p>

      <div className="footer-icons">

        <a href="https://github.com/njat8702">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/NehaJat">
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/nehajat501">
          <FaInstagram />
        </a>

      </div>

    </footer>
  );
}

export default Footer;