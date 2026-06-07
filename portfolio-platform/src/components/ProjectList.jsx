import ProjectCard from "./ProjectCard";
import "../styles/ProjectList.css";

function ProjectList({ projects }) {
  return (
    <section>
      <h2 className="project-count">
        Projects ({projects.length})
      </h2>

      {projects.length === 0 ? (
        <p className="empty">
          No projects found.
        </p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectList;