import { ITodo } from '../interfaces/todo.interface';
import { FiTrash2, FiCircle, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface TodoItemProps {
  todo: ITodo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center p-4 rounded-xl shadow-lg transition-all duration-300
                  ${
                    todo.completed
                      ? 'bg-gradient-to-r from-green-100 to-teal-100 shadow-teal-200/50'
                      : 'bg-white/70 backdrop-blur-sm shadow-purple-200/50'
                  }`}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className="mr-4 transition-transform duration-300 hover:scale-110"
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed ? (
          <FiCheckCircle className="text-brand-teal" size={24} />
        ) : (
          <FiCircle className="text-brand-purple" size={24} />
        )}
      </button>
      <span
        className={`flex-grow text-lg ${
          todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-gray-400 hover:text-brand-pink transition-colors duration-300"
        aria-label="Delete todo"
      >
        <FiTrash2 size={22} />
      </button>
    </motion.li>
  );
};

export default TodoItem;