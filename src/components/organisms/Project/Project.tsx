import Progress from '../../atoms/progress/Progress';
import Icon from '../../atoms/project/Icon';
import CompanyOne from '../../../assets/CompanyOne.png';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Share, Map, Building } from '../../../customIcons';
import { projectProps } from './index';

const Project = ({ progress="In Progress",
   wrapper="bg-secondaryBlue max-h-max p-2 rounded-2xl m-2",
   mode,
    wordColor="text-tertiaryBlue font-medium",
     icon=faHeart,
      src=CompanyOne }: projectProps) => {
  return (
    <div className="flex flex-col items-center justify-center   md:m-2 ">
      <div className=" mt-2 rounded-t-xl flex flex-col justify-between   bg-gradient-to-b from-gray-100 via-gray-500 to-black h-52 w-4/5 md:w-full">
        <div className="flex justify-between">
          <Progress
            Icon={mode}
            name={progress}
            wrapper={wrapper}
            wordColor={wordColor}
          />
          <div className="flex m-2 h-12 w-2/5 justify-around">
            <Share />
            <Icon icon={icon} />
          </div>
        </div>

        <div className="flex  mb-2 justify-start items-center">
          <img src={src} className="ml-2 " />
          <h1 className="text-white font-bold ml-4">Company Name</h1>
        </div>
      </div>
      <div className=" rounded-b-xl min-h-max mb-2 bg-tertiaryGrey w-4/5 pl-2 md:w-full">
        <h1 className="text-primaryBlack text-lg font-medium m-2">
          Project Name
        </h1>
        <div className="flex items-center m-2">
          <Map />
          <h1 className="text-quaternaryGrey mx-4 my-2">Location</h1>
        </div>
        <div className="flex items-center rounded-3xl bg-secondaryGreen max-w-max p-2 m-2">
          <Building />
          <h1 className="text-primaryDarkblue font-medium mx-4">Commercial</h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
