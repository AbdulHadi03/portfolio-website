import './Main.css';
import image from './img/Subject.png';
import Typewriter from './Typewriter.js';
function Main(){
    return(
        <div className='main-container'>
            <h1>Mohammed Abdul Hadi</h1>
            <div className="main-content">
            <div className='content'>
            <p>Welcome to my portfolio! 👋</p>
            <Typewriter/>
            <p>With a solid foundation in computer science and a knack for problem-solving, I thrive on building innovative solutions that bridge technology and real-world challenges. My expertise spans across creating dynamic web applications, designing scalable systems, and exploring cutting-edge AI/ML advancements to unlock new possibilities.</p>
            </div>
            <div>
                <img src={image} alt="Mohammed Abdul Hadi" width="250" />
            </div>
         </div>
        </div>
    )
}
export default Main;