import snippetScreenshot from '../../assets/Snippet_Screenshot.png'
import cooksCompassScreenshot from '../../assets/cooks-compass-screenshot.png'
import colorMyWorldScreenshot from '../../assets/color-my-world.png'

const Projects: React.FC = () => {
    return (
    <main>
        <div className="card-container">
            <div className="card">
                <h2>Color My World</h2>
                <a href="http://"><img className='screenshot' src={ colorMyWorldScreenshot } alt="Color my world screenshot" /></a>
            </div>
            <div className="card">
                <h2>The Cook's Compass</h2>
                <a href="https://the-cooks-compass.onrender.com/ "><img className='screenshot' src={ cooksCompassScreenshot } alt="The Cook's Compass screenshot" /></a>
            </div>
            <div className="card">
                <h2>Snippet</h2>
                <a href="https://snippet-vzjo.onrender.com/"><img className='screenshot' src={ snippetScreenshot } alt="Color my world screenshot" /></a>
            </div>
        </div>
    </main>
    )
}

export default Projects;