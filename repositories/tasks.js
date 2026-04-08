const pool = require("../config/db")

// Fetch All Task
const getAllTask = async (userId) => {
  const result = await pool.query(
    'SELECT id, task, is_completed AS "isCompleted" FROM task_list WHERE user_id = $1 ORDER BY id ASC',
    [userId]);
  return result.rows
};

// Fetch Specific Task
const getTaskById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM task_list WHERE id = $1',
    [id])
  return result.rows;
}

// Create New Task
const createNewTask = async (newTask, userId) => {
  const result = await pool.query(
    'INSERT INTO task_list (task, user_id) VALUES ($1, $2) RETURNING *',
    [newTask, userId])
  return result.rows;
}

// Update Specific Task
const updateTask = async (id, updatedData, userId) => {
  
  const result = await pool.query(
    "UPDATE task_list SET task = $1 WHERE id = $2 AND user_id = $3 RETURNING *",
    [updatedData.task, id, userId])
  
  return result.rows;
}

// Update Complete Status for Specific Task
const completedTask = async (taskStatus, id, userId) => {
  const result = await pool.query(
    "UPDATE task_list SET is_completed = $1 WHERE id = $2 AND user_id = $3 RETURNING *",
    [taskStatus, id, userId]
  )
  
  return result.rows;
}

// Delete Task
const deleteTask = async (id, userId) => {
  
  const result = await pool.query(
    "DELETE FROM task_list WHERE id = $1 AND user_id = $2 RETURNING *",
    [id, userId])
  
  return result.rows
}

module.exports = {
  getAllTask,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
  completedTask,
}