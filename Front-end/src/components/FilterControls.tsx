import { FilterStatus } from '../api/service/todo.service';
import { FaList, FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

interface FilterControlsProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

const filters: { name: FilterStatus; icon: React.ReactNode }[] = [
  { name: 'all', icon: <FaList /> },
  { name: 'active', icon: <FaRegCircle /> },
  { name: 'completed', icon: <FaRegCheckCircle /> },
];

const FilterControls = ({ currentFilter, onFilterChange }: FilterControlsProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-200/50 border border-white/30">
      {filters.map(({ name, icon }) => (
        <button
          key={name}
          onClick={() => onFilterChange(name)}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-100
            ${
              currentFilter === name
                ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-lg scale-105'
                : 'bg-white/70 text-gray-600 hover:bg-white hover:text-brand-purple hover:shadow-md'
            }
          `}
        >
          {icon}
          <span className="capitalize">{name}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterControls;