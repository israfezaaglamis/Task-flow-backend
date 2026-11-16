

const tasks = require("../data/tasks");
function getAllTasks(){
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === Number(id));
}

function createTask(taskData){
    const newTask = {
        id: tasks.length > 0
        ? Math.max(...tasks.map(task => task.id )) +1
        :1,
        ...taskData
    };
    tasks.push(newTask);
    return newTask;

}
function updateTask(id, taskData) {
    const foundTask = tasks.find(item => item.id === Number(id));

    if (!foundTask) {
        return null;
    }


    foundTask.title = taskData.title;
    foundTask.description = taskData.description;
    foundTask.status = taskData.status;
    foundTask.priority = taskData.priority;
    foundTask.assignedTo = taskData.assignedTo;

    return foundTask;
}


function deleteTask(id) {
    const taskIndex = tasks.findIndex(
        task => task.id === Number(id)
    );

    if (taskIndex === -1) {
        return false;
    }

    tasks.splice(taskIndex, 1);
    return true;
}
function assignTask(id, assignedTo) {
    const task = tasks.find(item => item.id === Number(id));

    if (!task) {
        return null;
    }

    task.assignedTo = assignedTo;

    return task;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    assignTask
    
};