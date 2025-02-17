import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; Josh Hensley 2025</p>
            <div className="footer-links">
                <hr />
                <a href="http://github.com/josh-hensley"><FontAwesomeIcon icon={ faGithub } /></a>
                <a href="https://www.linkedin.com/in/josh-hensley-88392181/"><FontAwesomeIcon icon={ faLinkedin } /></a>
                <a href="ailto:me@joshhensley.com"><FontAwesomeIcon icon={ faEnvelope } /></a>
                <hr />
            </div>
        </footer>
    )
}

export default Footer;