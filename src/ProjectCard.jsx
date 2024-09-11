import './ProjectCard.css'


const ProjectCard = ({ project }) => {

    return (
        <div className="project-card">
            <img src={project.imgURL}  alt={`${project.title} screenshot`}/>
            <a href={project.repoURL}>GitHub Repository</a>
            <p>Tech Stack: {project.techStack}</p>
        </div>
    )

}

export default ProjectCard 