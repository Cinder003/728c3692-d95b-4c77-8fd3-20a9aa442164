import { useState, FormEvent } from 'react';
import { FiPlus } from 'react-icons/fi';

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new vibrant todo..."
        className="flex-grow p-3 bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-xl shadow-lg shadow-purple-200/50
                   focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition-all duration-300"
      />
      <button
        type="submit"
        className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white
                   font-bold shadow-lg shadow-purple-300/50 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/50
                   transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
        aria-label="Add todo"
      >
        <FiPlus size={24} />
      </button>
    </form>
  );
};

export default TodoForm;