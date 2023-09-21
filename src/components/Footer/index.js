import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <main className="main">
      <footer className="footer">
        <div className="footer_content">
          <div className="footer_copyright">
            &copy; 2022-2023 Orvil. Todos os direitos reservados.
          </div>
          <div className="footer_contacts">
            <div className="footer_social_media">
              <a
                href="https://www.instagram.com/vgvictor_/"
                className="footer_link"
                id="instagram"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-gabriel-a76827181/"
                className="footer_link"
                id="facebook"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
