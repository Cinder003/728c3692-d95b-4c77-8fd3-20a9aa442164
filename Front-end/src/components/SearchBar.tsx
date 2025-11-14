import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for a todo..."
        className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-xl shadow-lg shadow-purple-200/50
                   focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;