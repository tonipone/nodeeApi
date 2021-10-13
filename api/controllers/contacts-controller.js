//const {builtinModules} = require('module');

class ContactsController {
     getAll () {
        return (req,res, next) =>{
            res.status(200).json({
                success: true,
                data: [
                    {fname: "Toni", lname: "Russo", phone: "333-777-888"},
                    {fname: "Roby", lname: "Esposito", phone: "444-888-999"},
                    {fname: "Nicolas", lname: "Bianchi", phone: "555-666-222"},
                    {fname: "New User", lname: "Contact", phone: "111-999-222"},
                    {fname: "New User-2", lname: "Contact-2", phone: "111-999-222"}
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

module.exports = new ContactsController();
