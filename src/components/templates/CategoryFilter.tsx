import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faChevronRight,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'All', count: 12131, active: true },
  { name: 'Category 1', count: 524 },
  { name: 'Category 2', count: 524 },
  { name: 'Category 3', count: 48 },
  { name: 'Category 4', count: 12 },
  { name: 'Category 5', count: 8 },
  { name: 'Category 6', count: 82 },
];

const CategoryFilter = () => {
  const [selected, setSelected] = useState('All');

  return (
    <div className="w-full overflow-hidden flex flex-wrap items-center gap-3 overflow-x-auto scrollbar-hide pb-2 pt-0">
      <div className="flex items-center gap-2 min-w-0 flex-wrap flex-row">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-sm font-normal shrink-0
                ${
                  selected === category.name
                    ? 'bg-primaryGreen text-white'
                    : 'bg-white text-black'
                }
                hover:bg-gray-200 transition-all`}
            onClick={() => setSelected(category.name)}
          >
            <span>{category.name}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                selected === category.name
                  ? 'bg-primaryBackgroungGray text-black'
                  : 'bg-black text-white'
              }`}
            >
              {category.count}
            </span>
          </button>
        ))}
        <div className="flex items-center gap-2 shrink-0">
          <button className="border rounded-full hover:bg-gray-200 px-3 py-1">
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
          </button>
          <span className="text-gray-200">|</span>
          <button className="p-2 border rounded-full hover:bg-gray-200 px-3 py-1">
            <FontAwesomeIcon icon={faTimes} className="text-gray-500" />
          </button>
          <button className="flex items-center space-x-1 p-2 px-5 border rounded-full hover:bg-gray-200">
            <div className="gap-0">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-gray-500 h-3 w-3.5"
              />
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-gray-500 h-3 w-3.5"
              />
            </div>

            <span className="text-sm text-gray-600">Brands A-Z</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
