import { progressProps } from './index';

const Progress = ({
  wrapper = '',
  Icon,
  name = 'In Progress',
  wordColor = 'white',
}: progressProps) => {
  return (
    <div className={`${wrapper}`}>
      {Icon && <Icon />}

      {name && <span className={`${wordColor}`}>{name}</span>}
    </div>
  );
};

export default Progress;
