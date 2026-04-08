const tasksRepositories = require("../repositories/tasks");

// Fetch All Task
const getAllTask = async (userId) => {
  return await tasksRepositories.getAllTask(userId)
};

// Fetch Specific Task
const getTaskById = async (id) => {
  const task = await tasksRepositories.getTaskById(id);
  if (!task || task.length === 0) {
    throw new Error("TASK_NOT_FOUND")
  };
  return Array.isArray(task) ? task[0] : task;
}

// Create New Task
const createNewTask = async (task, userId) => {
  return await tasksRepositories.createNewTask(task, userId)
}

// Update Specific Task
const updateTask = async (id, updatedData, userId) => {
  const task = await tasksRepositories.updateTask(id, updatedData, userId)
  if (!task || task.length === 0) {
    throw new Error("TASK_NOT_FOUND");
  }
    return Array.isArray(task) ? task[0] : task;
}

// Update Complete Status for Specific Task
const completedTask = async (taskStatus, id, userId) => {
  const task = await tasksRepositories.completedTask(taskStatus, id, userId);
  if (!task || task.length === 0) {
    throw new Error("TASK_NOT_FOUND");
  }
  
  return Array.isArray(task) ? task[0] : task;
}

// Delete Specific Task
const deleteTask = async (id, userId) => {
  const deletedTask = await tasksRepositories.deleteTask(id, userId);
  
  if (!deletedTask) {
    throw new Error("TASK_NOT_FOUND");
  }
  
  return Array.isArray(deletedTask) ? deletedTask[0] : deletedTask;
}

module.exports = {
  getAllTask,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
  completedTask,
}