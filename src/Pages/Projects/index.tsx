const Projects: React.FC = () => {
    return (
    <main>
        <div className="card-container">
            <div className="card">
                <h2>Color My World</h2>
                <a href="https://mmcgarry13.github.io/Color-My-World/" target='_blank'><img className='screenshot' src="/assets/color-my-world.png" alt="Color my world screenshot" /></a>
            </div>
            <div className="card">
                <h2>Snippet</h2>
                <a href="https://snippet-vzjo.onrender.com/" target='_blank'><img className='screenshot' src="/assets/Snippet_Screenshot.png" alt="Color my world screenshot" /></a>
            </div>
            <div className="card">
                <h2>joshhensley.com</h2>
                <a href="https://joshhensley.com/" target='_blank'><img className='screenshot' src="/assets/jhcomscreenshot.png" alt="joshhensley.com screenshot" /></a>
            </div>
            <div className="card">
                <h2>Digital Callboard</h2>
                <a href="https://digital-callboard.onrender.com/" target='_blank'><img className='screenshot' src="/assets/digital-callboard-screenshot.png" alt="shrekrsm.com screenshot" /></a>
            </div>
            <div className="card">
                <h2>stagecorps.com</h2>
                <a href="https://stagecorps.com" target='_blank'><img src="/assets/stagecorps.png" alt="stagecorps.com screenshot" className="screenshot" /></a>
            </div>
        </div>
    </main>
    )
}

export default Projects;