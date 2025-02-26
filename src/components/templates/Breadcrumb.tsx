import BreadCrumbImg from '../../assets/Breadcrumb.svg';

type BreadcrumbProps = {
  title: string;
};

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <div className="flex items-center space-x-2 text-gray-500">
      <img
        src={BreadCrumbImg}
        alt="Breadcrumb Icon"
        className="text-gray-400"
      />
      <span className="text-gray-400">{'>'}</span>
      <span className="bg-secondaryGreen text-primaryBlue px-2 py-1 rounded-md text-sm font-medium">
        {title}
      </span>
    </div>
  );
};

export default Breadcrumb;
