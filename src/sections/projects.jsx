import { myProjects } from "../Constant";
import Project from "../components/components/Project";

const Projects = () => {
  return (
    <section id="work" className="c-space section-spacing">
      <h2 className="text-heading">Selected AI Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  )
}

export default Projects;
