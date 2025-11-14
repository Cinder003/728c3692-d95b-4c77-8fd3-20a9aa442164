import { Router } from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controller/todo.controller';

const router = Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;