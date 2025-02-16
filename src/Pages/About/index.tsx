import headshot from '../../assets/headshot.png'

const About: React.FC = () => {
    return (
        <main className='about'>
            <img src={headshot} id="headshot" alt="headshot" />
            <h1>About</h1>
            <article>
                <h3>Background in Technical Theatre</h3>
                With a strong foundation in technical theatre, I have spent years 
                working behind the scenes and in the scenes to bring creative visions to life. As a 
                former technical theatre teacher, I guided students through the 
                intricacies of stagecraft, lighting, sound design, and production 
                management. My professional experience includes work in both theatre 
                and film, contributing to productions that demanded precision, 
                collaboration, and creative problem-solving.

                <h3>Transition to Full-Stack Web Development</h3>
                Building and maintaining the technical aspects of productions has
                honed my ability to work within complex systems, troubleshoot under 
                pressure, and adapt to new technologies quickly. These skills naturally
                translate into web development, where logical thinking, attention to 
                detail, and teamwork are essential. My journey into full-stack development
                has been fueled by a passion for problem-solving and a drive to create 
                functional, user-friendly digital experiences.

                <h3>Skills and Technologies</h3>
                Leveraging my background in technical theatre, I bring a unique perspective 
                to web development. My skills include:
                <ul>
                    <li>Front-End: HTML, CSS, JavaScript, React</li>
                    <li>Back-End: Node.js, Express, Python, TypeScript, Sequelize, Mongoose</li>
                    <li>Databases: PostgreSQL, MongoDB</li>
                    <li>Version Control & Deployment: Git, GitHub, Render</li>
                    <li>Other Relevant Skills: Project management, creative problem-solving, teamwork, and adaptability</li>
                </ul>

                <h3>Looking Ahead</h3>
                As I embark on this new chapter, I am eager to contribute my technical 
                expertise and creative problem-solving abilities to web development projects. 
                Whether collaborating with a team or tackling challenges independently, I strive 
                to build efficient and engaging applications that enhance user experiences. I'm 
                excited to bring my production mindset to the digital stage.

                <h3>Let's Connect!</h3>
                I'd love to connect with fellow developers, designers, and creatives. Feel free to reach out!
            </article>
        </main>
    )
}

export default About;