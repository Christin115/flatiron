import { useState } from "react";
import "../styles/ProjectForm.css";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      category,
      image,
      description
    };

    addProject(newProject);

    setTitle("");
    setCategory("");
    setImage("");
    setDescription("");
  }

  return (
    <form
      className="project-form"
      onSubmit={handleSubmit}
    >
      <h2>Add Project</h2>

      <input
        placeholder="Project Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        required
      />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) =>
          setImage(e.target.value)
        }
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        required
      />

      <button type="submit">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;