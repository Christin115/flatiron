import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
      />

      <div className="card-content">
        <span className="badge">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;