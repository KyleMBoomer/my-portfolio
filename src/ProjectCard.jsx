import './ProjectCard.css'


const ProjectCard = ({ project }) => {

    return (
        <div className="project-card">
            <p>{project.title}</p>
            <img src={project.imgURL}/>
            <a href={project.repoURL}>GitHub Repository</a>
            <p>{project.techStack}</p>
        </div>
    )

}

export default ProjectCard 