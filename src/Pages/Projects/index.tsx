import snippetScreenshot from '../../assets/Snippet_Screenshot.png'
import colorMyWorldScreenshot from '../../assets/color-my-world.png'
import joshhensleyScreenshot from '../../assets/jhcomscreenshot.png'

const Projects: React.FC = () => {
    return (
    <main>
        <div className="card-container">
            <div className="card">
                <h2>Color My World</h2>
                <a href="https://mmcgarry13.github.io/Color-My-World/" target='_blank'><img className='screenshot' src={ colorMyWorldScreenshot } alt="Color my world screenshot" /></a>
            </div>
            <div className="card">
                <h2>Snippet</h2>
                <a href="https://snippet-vzjo.onrender.com/" target='_blank'><img className='screenshot' src={ snippetScreenshot } alt="Color my world screenshot" /></a>
            </div>
            <div className="card">
                <h2>joshhensley.com</h2>
                <a href="https://joshhensley.com/" target='_blank'><img className='screenshot' src={ joshhensleyScreenshot } alt="joshhensley.com screenshot" /></a>
            </div>
        </div>
    </main>
    )
}

export default Projects;