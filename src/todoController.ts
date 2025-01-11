import { Request, Response } from 'express';
import Todo from './Todo';
import mongoose, { Schema, Document } from 'mongoose';

// export interface ITodo extends Document {
//   title: string;
//   completed: boolean;
// }

// const TodoSchema: Schema = new Schema({
//   title: { type: String, required: true },
//   completed: { type: Boolean, default: false },
// });

// export default mongoose.model<ITodo>('Todo', TodoSchema);


export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
};

export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title } = req.body;
      if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
      }
      const newTodo = new Todo({
        title,
        completed: false,
      });
    //   res.status(201).json({ message: 'Todo created successfully' });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error creating todo' });
    }
  };

export const updateTodo = async (req: Request, res: Response): Promise<void>  => {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { title, completed },
        { new: true, runValidators: true }
      );
      if (!updatedTodo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Error updating todo' });
    }
  };
  
export const deleteTodo = async (req: Request, res: Response): Promise<void>  => {
    try {
      const { id } = req.params;
      const deletedTodo = await Todo.findByIdAndDelete(id);
      if (!deletedTodo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting todo' });
    }
  };
  