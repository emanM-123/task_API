import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task_name: String,
  description: String,
  due_date: Date,
  status: String,
  created_at: Date,
});

const Task = mongoose.model("Task", taskSchema);

export { Task };
