import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconProps } from './index';

const Icon = ({ icon, classes = '' }: iconProps) => {
  return (
    <div className="rounded-full mx-1 p-2 h-10 w-10 bg-white flex items-center justify-center">
      {icon && <FontAwesomeIcon icon={icon} className={`${classes}`} />}
    </div>
  );
};

export default Icon;
 