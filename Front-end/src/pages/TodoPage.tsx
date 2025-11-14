import { useState, useEffect, useCallback } from 'react';
import { ITodo } from '../interfaces/todo.interface';
import * as todoService from '../api/service/todo.service';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import FilterControls from '../components/FilterControls';
import SearchBar from '../components/SearchBar';
import { useDebounce } from '../hooks/useDebounce';
import { FiCheckSquare } from 'react-icons/fi';

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<todoService.FilterStatus>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchTodos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedTodos = await todoService.getTodos(filter, debouncedSearchTerm);
      setTodos(fetchedTodos);
    } catch (err) {
      setError('Failed to fetch todos. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [filter, debouncedSearchTerm]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAddTodo = async (title: string) => {
    try {
      await todoService.addTodo(title);
      fetchTodos(); // Refetch to get the latest list
    } catch (err) {
      setError('Failed to add todo.');
    }
  };

  const handleToggleTodo = async (id: number) => {
    try {
      await todoService.toggleTodoStatus(id);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo.');
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await todoService.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo.');
    }
  };

  return (
    <main className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-3xl">
      <header className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-brand-purple via-brand-blue to-brand-pink bg-clip-text text-transparent pb-2">
          Vibrant Todos
        </h1>
        <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
          <FiCheckSquare />
          <span>Your daily tasks, beautifully organized.</span>
        </p>
      </header>

      <div className="space-y-6">
        <div className="p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl shadow-purple-200/50 border border-white/30">
          <TodoForm onAddTodo={handleAddTodo} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <FilterControls currentFilter={filter} onFilterChange={setFilter} />
        </div>

        <div className="p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl shadow-purple-200/50 border border-white/30 min-h-[200px]">
          {error && <p className="text-center text-red-500 bg-red-100 p-3 rounded-lg">{error}</p>}
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="w-12 h-12 border-4 border-t-brand-purple border-gray-200 rounded-full animate-spin"></div>
            </div>
          ) : (
            <TodoList
              todos={todos}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default TodoPage;