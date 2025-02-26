import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Check, Loader, Compass } from '../customIcons';
import CompanyOne from '../assets/CompanyOne.png';

export const projectData = [
  {
    progress: 'In Progress',
    wrapper: 'bg-secondaryBlue max-h-max p-2 rounded-2xl m-2 flex items-center',
    wordColor: 'text-tertiaryBlue text-sm  font-medium pl-2',
    mode: Compass,
    icon: faHeart,
    src: CompanyOne,
  },
  {
    progress: 'In Progress',
    wrapper: 'bg-purple-100 max-h-max p-2 rounded-2xl m-2 flex items-center',
    wordColor: 'text-tertiaryBlue text-sm font-medium pl-2',
    mode: Loader,
    icon: faHeart,
    src: CompanyOne,
  },
  {
    progress: 'Completed',
    wrapper: 'bg-green-100 max-h-max p-2 rounded-2xl m-2 flex items-center',
    wordColor: 'text-green-600 text-sm font-medium pl-2',
    mode: Check,
    icon: faHeart,
    src: CompanyOne,
  },
  {
    progress: 'In Progress',
    wrapper: 'bg-secondaryBlue max-h-max p-2 rounded-2xl m-2 flex items-center',
    wordColor: 'text-tertiaryBlue text-sm font-medium pl-2',
    mode: Compass,
    icon: faHeart,
    src: CompanyOne,
  },
  {
    progress: 'In Progress',
    wrapper: 'bg-secondaryBlue max-h-max p-2 rounded-2xl m-2 flex items-center',
    wordColor: 'text-tertiaryBlue text-sm font-medium pl-2',
    mode: Compass,
    icon: faHeart,
    src: CompanyOne,
  },
  {
    progress: 'In Progress',
    wrapper: 'bg-purple-100 max-h-max p-2 rounded-2xl m-2 flex items-center',
    wordColor: 'text-tertiaryBlue text-sm font-medium pl-2',
    mode: Loader,
    icon: faHeart,
    src: CompanyOne,
  },
];
