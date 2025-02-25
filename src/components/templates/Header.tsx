import Input from '../atoms/input/Input';
import Navbar from '../../components/templates/Navbar';
import { Home } from '../../customIcons/Home';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-3 md:mb-1">
        <Navbar />
      </div>
      <div className="w-full flex items-center justify-center mb-3 md:mb-1">
        <Input placeholder="Search for ..." />
      </div>
      <div className="flex justify-start items-center  w-full p-2 md:pl-6">
        <Home />
        <FontAwesomeIcon
          icon={faGreaterThan}
          className="text-primaryGrey h-3 w-3 mx-2"
        />
        <h1 className="text-primaryGreen bg-secondaryGreen px-2 py-1 rounded-xl">
          Projects
        </h1>
      </div>
    </div>
  );
};

export default Header;
