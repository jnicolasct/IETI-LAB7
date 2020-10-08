const items  =[
    {"id":1, 
    "descripcion":"prueba", 
    "dueDate": new Date().toString(), 
    "status":"en pruebas", 
    "responsable":{
        "name":"nicolas cortes", 
        "email": "nc@mail.com"
        }
    },
    {"id":2, 
    "descripcion":"prueba2", 
    "dueDate": new Date().toString(), 
    "status":"en pruebas2", 
    "responsable":{
        "name":"johan cortes", 
        "email": "jc@mail.com"
        }
    },
    {"id":3, 
    "descripcion":"prueba3", 
    "dueDate": new Date().toString(), 
    "status":"en pruebas3", 
    "responsable":{
        "name":"cristian cortes", 
        "email": "cc@mail.com"
        }
    } 

]

function addTask(task){
    console.log("pr");
    items.push(task);
}

function getTasks(){
    console.log("prg");
    return items;
}

exports.addTask = addTask;
exports.getTasks = getTasks;