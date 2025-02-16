import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconStyle = {
    scale: '300%',
    margin: '1em'
}

const Contact: React.FC = () => {
    return (
    <main>
        <h1>Contact Me</h1>
        <div className='card-container'>
            <div></div>
            <div className='card'>
                <h3>Email</h3>
                <a href="mailto:me@joshhensley.com"><FontAwesomeIcon icon={ faEnvelope } style={ iconStyle }/></a>
                <p>me@joshhensley.com</p>
            </div>
            <div className='card'>
                <h3>Github</h3>
                <a href="http://www.github.com/josh-hensley"><FontAwesomeIcon icon={ faGithub } style={ iconStyle }/></a>
                <p>github.com/josh-hensley</p>
            </div>
            <div className='card'>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/josh-hensley-88392181/"><FontAwesomeIcon icon={ faLinkedin } style={ iconStyle }/></a>
                <p>linkedin.com/in/josh-hensley-88392181</p>
            </div>
            <div></div>
        </div>
    </main>
    )
}

export default Contact;