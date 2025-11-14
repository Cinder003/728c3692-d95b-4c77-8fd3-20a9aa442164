import { Request, Response } from 'express';
import prisma from '../config/db.config';
import { Prisma } from '@prisma/client';
import { CreateTodoSchema } from '../validation/todo.validation';

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const { status, search } = req.query;

    const where: Prisma.TodoWhereInput = {};

    if (status === 'active') {
      where.completed = false;
    } else if (status === 'completed') {
      where.completed = true;
    }

    if (search && typeof search === 'string') {
      where.title = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const todos = await prisma.todo.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const validatedData = CreateTodoSchema.parse(req.body);
    const newTodo = await prisma.todo.create({
      data: {
        title: validatedData.title,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: 'Invalid request body', error });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await prisma.todo.findUnique({ where: { id: parseInt(id) } });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    const updatedTodo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: { completed: !todo.completed },
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error });
  }
};