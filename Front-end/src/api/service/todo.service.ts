import axios from 'axios';
import { ITodo } from '../../interfaces/todo.interface';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type FilterStatus = 'all' | 'active' | 'completed';

export const getTodos = async (status: FilterStatus, search: string): Promise<ITodo[]> => {
  const params = new URLSearchParams();
  if (status !== 'all') {
    params.append('status', status);
  }
  if (search) {
    params.append('search', search);
  }
  const response = await apiClient.get(`/todos`, { params });
  return response.data;
};

export const addTodo = async (title: string): Promise<ITodo> => {
  const response = await apiClient.post('/todos', { title });
  return response.data;
};

export const toggleTodoStatus = async (id: number): Promise<ITodo> => {
  const response = await apiClient.patch(`/todos/${id}`);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await apiClient.delete(`/todos/${id}`);
};