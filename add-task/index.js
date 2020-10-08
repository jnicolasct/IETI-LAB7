const apiList = require("../lista/lista")

module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    const { v4: uuidv4 } = require('uuid');
    const id= uuidv4();
    const description = task.description;
    const dueDate = task.dueDate;
    const status = task.status;
    const responsableName = task.responsible.name;
    const responsableEmail = task.responsible.email;

    const responseMessage = {"id":id, "description":description, "dueDate":dueDate, "status":status, "responsible":{"name":responsableName, "email": responsableEmail} };

    apiList.addTask(responseMessage);

    context.res = {
        status: 201,
        body: responseMessage
    };
}