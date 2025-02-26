import Header from '../components/templates/Header';
import ProjectCards from '../components/templates/ProjectCards';
import Map from '../components/templates/Map';

const Projects = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className=" flex flex-col md:flex-row items-center justify-center">
        <ProjectCards />
        <Map />
      </div>
    </div>
  );
};

export default Projects;
