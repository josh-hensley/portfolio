import headshot from '../../assets/headshot.png'

const Home: React.FC = ()=>{
    return (
    <main>
        <img src={headshot} id="headshot"  alt="headshot" />
        <p>
            Full Stack Web Developer | 
            MERN & PERN Stack | 
            Technical Theatre Director with 10 Years of Experience | 
            BFA in Theatre | 
            Certified in Full Stack Development
        </p>
        <div className="card-container">
            <a href="/About"><div className="card">About</div></a>
            <a href="/Contact"><div className="card">Contact</div></a>
            <a href="/Projects"><div className="card">Projects</div></a>
        </div>
    </main>
    )
}
export default Home;