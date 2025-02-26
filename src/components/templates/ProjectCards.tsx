import Project from '../organisms/Project/Project';
import { projectData } from '../../constants/Projects';

const ProjectCards = () => {
  return (
    <div className="mx-2 md:mx-6 w-4/5 h-custom  overflow-auto ">
      <div className="flex items-center ">
        <h1 className="font-normal text-2xl ">Projects</h1>
        <div className="flex ">
          <p className="bg-primaryWhite  mx-2 font-medium rounded-2xl">New</p>
          <p className="bg-primaryWhite  mx-2 font-medium rounded-2xl">
            Upcoming
          </p>
          <p className="bg-primaryWhite  mx-2 font-medium rounded-2xl">
            For Sale
          </p>
        </div>
      </div>
      <p className="text-secondaryGrey">#OF RESULTS</p>
      <div className=" flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 ">
        {projectData.map((project) => {
          return (
            <div>
              <Project
                progress={project.progress}
                wrapper={project.wrapper}
                mode={project.mode}
                wordColor={project.wordColor}
                icon={project.icon}
                src={project.src}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCards;
