import ProjectCard from './ProjectCard'
import './Projects.css'
import { projects } from '../data'

const Projects = () => {


    return (
        <div className="projects-page">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => {
                    <ProjectCard key={project.id} data={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects