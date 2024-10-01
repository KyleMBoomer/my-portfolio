import './AboutMe.css'
import headshot from '../public/Headshot.jpg'

const AboutMe = () => {
    const resume = 'https://docs.google.com/document/d/1qOseZBX4-00OiPx4OF_yUKgJ1GHce-PsQ0ny5s2L1tU'
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="img-and-p-wrapper">
                <img src={headshot} />
                <p>Hello, there, thank you for stopping by. I'm Kyle, a Software Developer with a penchant for front-end design. 
                    I'm keen on constructing clean, efficient applications that are scalable and accessible.
                     Please, peruse my Projects page, and feel free to visit my GitHub links for each project. 
                     You may view my resume by clicking below. I'd love to connect with you through my Contact page. </p>
                     <a href={resume}>Click Here For My Resume</a>
            </div>
        </div>
    )
}

export default AboutMe