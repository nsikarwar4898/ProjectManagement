import { progressProps } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Progress = ({
  wrapper="", 
  color = 'bg-white',
  icon ,
  name = 'In Progress',
  wordColor='white'
}: progressProps) => {
  return (
    <div  className={`${wrapper}`}>
      {icon && (
        <FontAwesomeIcon icon={icon} className={`${color}`} />
      )}
      {name && <span className={`${wordColor}`} >{name}</span>}
    </div>
  );
};

export default Progress;
