
import "./menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGears, faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";

// <li onClick={()=>setMenuOpen(false)}>
// <a href="#skills"><FontAwesomeIcon icon={faGears} size="xs" /><span>Skills</span></a>
// </li>
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro"><FontAwesomeIcon icon={faHouse} size="xs" /><span>Home</span></a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio"><FontAwesomeIcon icon={faBriefcase} size="xs" /><span>Portfolio</span></a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact"><FontAwesomeIcon icon={faEnvelope} size="xs" /><span>Contact</span></a>
        </li>
      </ul>
    </div>
  );
}