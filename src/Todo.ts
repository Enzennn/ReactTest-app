import mongoose, { Model, Schema } from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

//export default mongoose.model('Todo', TodoSchema);

const Todo: Model<any> =
  mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

export default Todo;