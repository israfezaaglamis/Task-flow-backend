const taskService = require("../services/taskService");

function getAllTasks(req, res) {
    res.json(taskService.getAllTasks());
}

function getTaskById(req, res){
    const task = taskService.getTaskById(req.params.id);

    if(!task){
        return res.status(404).json({message : "Task not found" });
    }

    res.json(task);
}

function createTask(req,res){
    const {title, description, status, priority, assignedTo} = req.body;
    const allowedPriorities = ["LOW", "MEDIUM", "HIGH"];

if (!allowedPriorities.includes(priority)) {
    return res.status(400).json({
        message: "Priority must be LOW, MEDIUM or HIGH"
    });
}

    if(!title){
        return res.status(400).json({
            message: "Title is required. Give your task a title"
        });
    } 

    const newTask = taskService.createTask({
        title,description,status,priority,assignedTo
    });
    res.status(201).json({
    ...newTask,
    message: "Task created",
    assignmentWarning: newTask.assignedTo
        ? null
        : "This task has not been assigned to an employee. Would you like to assign someone?"
});

}
function updateTask(req,res){
    const {title, description,status,priority,assignedTo} = req.body;
    if (!title || !description || !status || !priority) {
    return res.status(400).json({
        message: "Title, description, status and priority are required"
    });

    }const allowedPriorities = ["LOW", "MEDIUM", "HIGH"];

if (!allowedPriorities.includes(priority)) {
    return res.status(400).json({
        message: "Priority must be LOW, MEDIUM or HIGH"
    });
}

    const updatedTask = taskService.updateTask(req.params.id, {
        title,
        description,
        status,
        priority,
        assignedTo
    });

    if (!updatedTask) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json({
        ...updatedTask,
        message: "Task updated successfully"
    });
}

function assignTask(req, res) {
    const { assignedTo } = req.body;

    if (!assignedTo || !assignedTo.trim()) {
        return res.status(400).json({
            message: "Employee name is required"
        });
    }

    const assignedTask = taskService.assignTask(
        req.params.id,
        assignedTo.trim()
    );

    if (!assignedTask) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json({
        ...assignedTask,
        message: "Task assigned successfully"
    });
}
function deleteTask(req,res){
    const deletedTask = taskService.deleteTask(req.params.id);

    if(!deletedTask){
        return res.status(404).json({
            message : "Task not found"
        });

    }
    res.status(200).json({
        message : "Task deleted succesfully"
    });
}



module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    assignTask,
    deleteTask
};