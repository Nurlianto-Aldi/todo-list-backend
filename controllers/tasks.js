const taskServices = require("../services/tasks");

// FETCH All Task
const getAllTask = async (req, res) => {
  try {
    const userId = req.user.userId;
    const taskList = await taskServices.getAllTask(userId)
    res.status(200).json({
      data: taskList
    })
  } catch (err) {
    console.error("WARNING! There is an error:", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
};

// Fetch Specific Task
const getTaskById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const task = await taskServices.getTaskById(id);
    
    res.status(200).json({
      message: "Success find the Task!",
      data: task
    });
  } catch (err) {
    if (err.message === "TASK_NOT_FOUND") {
      return res.status(404).json({
        message: "Task not found"
      });
    }
    console.error("WARNING! There is an error:", err)
    res.status(500).json({
      message: "Internal server error"
    });
  }
  
}

// Create New Task
const createNewTask = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { task } = req.body
    const newTask = await taskServices.createNewTask(task, userId)
    res.status(201).json({
      Message: "New task successfully created!",
      data: newTask
    });
  } catch (err) {
    console.error("WARNING! There is an error:", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
};

// Update Specific Task
const updateTask = async (req, res) => {
  try {
    const userId = req.user.userId
    const id = Number(req.params.id);
    const updatedData = req.body;
    const task = await taskServices.updateTask(id, updatedData, userId)
    res.status(200).json({
      message: `Task with id : ${id} successfully updated!`,
      data: task
    })
  } catch (err) {
    if (err.message === "TASK_NOT_FOUND") {
      return res.status(404).json({
        message: "Task not found!"
      })
    }
    console.error("WARNING! There is an error:", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

// Update Complete Status for Specific Task
const completedTask = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const userId = req.user.userId
    const { isCompleted } = req.body;
    
    const task = await taskServices.completedTask(isCompleted, id, userId)
    
    res.status(200).json({
      message: `Task with id: ${id} status successfully updated!`,
      data: task
    })
  } catch (err) {
    if (err.message === "TASK_NOT_FOUND") {
      return res.status(404).json({
        message: "Task not found"
      });
    }
    console.error("Error updating status:", err)
    res.json(500).json({
      message: "Internal Server Error"
    })
  }
  
}

// Delete Specific Task
const deleteTask = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const userId = req.user.userId
    const deletedTask = await taskServices.deleteTask(id, userId)
    res.status(200).json({
      message: `Task with id: ${id} has deleted!`,
      data: deletedTask
    })
  } catch (err) {
    if (err.message === "TASK_NOT_FOUND") {
      return res.status(404).json({
        message: "Task not found"
      });
    }
    console.error("WARNING! There is an error", err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports = {
  getAllTask,
  getTaskById,
  createNewTask,
  updateTask,
  deleteTask,
  completedTask,
}