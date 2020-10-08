const apiList = require("../lista/lista")

module.exports = async function (context, req) {
    context.log('Get all task of the planner');
    const items = apiList.getTasks();

    context.res = {
        status: 201,
        body: items
    };
}

