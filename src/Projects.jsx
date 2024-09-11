import ProjectCard from './ProjectCard'
import { useEffect } from 'react'
import Glide from '@glidejs/glide'
import './Projects.css'
import { projects } from '../data'

const Projects = () => {
    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'carousel',
            perView: 1,
            gap: 20,
            autoplay: 5000,
        })
        glide.mount()
    }, [])

    return (
        <div className="projects-wrapper">
            <h1>My Projects</h1>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {projects.map((project) => (
                            <li className="glide__slide" key={project.id}>
                                <ProjectCard project={project} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">‹</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">›</button>
                </div>
            </div>
        </div>
    );
}

export default Projects