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
          //console.log(req.body);
          const obj = {fname: req.body.fname, lname: req.body.lname, phone: req.body.phone }
          res.status(200).json({success: true,method: "create", contact: obj})
        }
    }

    findById(){
        return (req,res,next) => {
            //console.log(req.params);
            res.status(200).json({success: true, method: "findById", contactID: req.params.id })
        }
    }
    update(){
        return (req,res,next) => {
            //console.log(req.query);
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
