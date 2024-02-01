import ProjectCard from "../components/ProjectCard";
import { Projects } from "../constants";

const Page = () => {
  return (
    <div 
      style={{backgroundImage:'url(/mountains.jpg'}}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'
    >
      <div className='grid grid-cols-2 gap-5 max-w-full max-h-full'>
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  )
};

export default Page;
