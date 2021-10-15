const Todo = require('../models/todo-model');

class TodosController {
    getAll () {
        return (req,res, next) =>{
            res.status(200).json({
                success: true,
                data: [
                    {todo: "Learn Java Script"},
                    {todo: "Angular Js"},
                    {todo: "React Js"}
                ]
            })
        }
    }

    create(){
        return (req,res,next) => {
            res.status(200).json({success: true,method: "create"})
        }
    }

    findById(){
        return (req,res,next) => {
            res.status(200).json({success: true, method: "findById"})
        }
    }
    update(){
        return (req,res,next) => {
            res.status(200).json({success: true,method: "update"})
        }
    }
    delete(){
        return (req,res,next) => {
            res.status(200).json({success: true,method: "delete"})
        }
    }

}

module.exports = new TodosController();
