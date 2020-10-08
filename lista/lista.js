

const items  =[
    {"id":1, 
    "description":"prueba",
    "dueDate": new Date().toDateString(),
    "status":"en pruebas", 
    "responsible":{
        "name":"nicolas cortes", 
        "email": "nc@mail.com"
        }
    },
    {"id":2, 
    "description":"prueba2",
    "dueDate": new Date().toDateString(),
    "status":"en pruebas2", 
    "responsible":{
        "name":"johan cortes", 
        "email": "jc@mail.com"
        }
    },
    {"id":3, 
    "description":"prueba3",
    "dueDate": new Date().toDateString(),
    "status":"en pruebas3", 
    "responsible":{
        "name":"cristian cortes", 
        "email": "cc@mail.com"
        }
    } 

]

function addTask(task){
    items.push(task);
}

function getTasks(){
    return items;
}

exports.addTask = addTask;
exports.getTasks = getTasks;