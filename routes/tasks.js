const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth")

const taskController = require("../controllers/tasks");

// GET Fetch All Task
router.get("/", authenticateToken, taskController.getAllTask);

// GET Fetch Specific Task
router.get("/:id", authenticateToken, taskController.getTaskById);

// POST Create New Task
router.post("/", authenticateToken, taskController.createNewTask);

// PATCH Update Specific Task
router.patch("/:id", authenticateToken, taskController.updateTask);

// PATCH Update Complete Status for Specific Task
router.patch("/:id/complete", authenticateToken, taskController.completedTask); 

// DELETE Delete Specific Task
router.delete("/:id", authenticateToken, taskController.deleteTask);

module.exports = router