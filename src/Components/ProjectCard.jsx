import PropTypes from 'prop-types'
import '../CSS/ProjectCard.css'


const ProjectCard = ({ project }) => {

    return (
        <div className="project-card">
            <img src={`${import.meta.env.BASE_URL}${project.imgURL}`}  alt={`${project.title} screenshot`}/>
            <a href={project.repoURL}>GitHub Repository</a>
            <p>Tech Stack: {project.techStack}</p>
        </div>
    )

}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        imgURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        repoURL: PropTypes.string.isRequired,
        techStack: PropTypes.string.isRequired,
    }).isRequired,
}

export default ProjectCard