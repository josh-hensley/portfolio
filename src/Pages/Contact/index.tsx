const Contact: React.FC = () => {
    return (
    <main>
        <h1>Contact Me</h1>
        <div className='card-container'>
            <div></div>
            <div className='card'>
                <p><a href="mailto:me@joshhensley.com">email</a></p>
            </div>
            <div className='card'>
                <p><a href="http://www.github.com/josh-hensley">github</a></p>
            </div>
            <div className='card'>
                <p><a href="https://www.linkedin.com/in/josh-hensley-88392181/">linkedin</a></p>
            </div>
            <div></div>
        </div>
    </main>
    )
}

export default Contact;