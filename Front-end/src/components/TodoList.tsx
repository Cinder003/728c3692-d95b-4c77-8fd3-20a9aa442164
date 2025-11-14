import { ITodo } from '../interfaces/todo.interface';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';
import { FiClipboard } from 'react-icons/fi';

interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-16 px-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg shadow-purple-200/50">
        <FiClipboard className="mx-auto text-5xl text-brand-purple opacity-50" />
        <h3 className="mt-4 text-xl font-semibold text-gray-700">No todos yet!</h3>
        <p className="mt-1 text-gray-500">Time to add your first task.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;