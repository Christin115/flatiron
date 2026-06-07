import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Brand Redesign",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
      description: "Complete rebrand for a startup."
    },
    {
      id: 2,
      title: "Marketing Campaign",
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Social media campaign with 1M+ impressions."
    },
    {
      id: 3,
      title: "Website Launch",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "Responsive company website."
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(project) {
    setProjects([...projects, project]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <main>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <ProjectForm addProject={addProject} />

        <ProjectList projects={filteredProjects} />
      </main>

      <Footer />
    </div>
  );
}

export default App;