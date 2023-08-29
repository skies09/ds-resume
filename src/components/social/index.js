import "./social.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <div className="social-container">
    <a id='facebook' href="https://www.facebook.com/profile.php?id=100002920786337"
      className="facebook social">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
      <a id='instagram' href="https://www.instagram.com/skies009/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a id='linkedIn' href="https://www.linkedin.com/in/donna-smith-091285"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a id='github' href="https://github.com/skies09"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
</div>
  );
}
