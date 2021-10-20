//const {builtinModules} = require('module');
const Contact = require('../models/contact-model');

class ContactsController {
     getAll () {
        return async (req,res, next) =>{
            const userId = req.userData.id;
            const {count, rows} = await Contact.findAndCountAll({
                where: {user_id: userId},
                order: [['lname', 'ASC'], ['fname','ASC']]
            })
           res.status(200).json({
               data: rows,
               total: count,
               status: true
           })

        }
    }

    create(){
      return async (req,res,next) => {
          //console.log(req.body);
          try {
              const userId = req.userData.id;
              const contact = await Contact.create({
                  fname: req.body.fname,
                  lname: req.body.lname,
                  email: req.body.email,
                  phone: req.body.phone,
                  user_id: userId
              })
              res.status(200).json({
                  success: true, contact: contact
              })
          }catch (e) {
              res.status(422).json(e.error)
          }
          //const obj = {fname: req.body.fname, lname: req.body.lname, phone: req.body.phone }
          //res.status(200).json({success: true,method: "create", contact: obj})
        }
    }

    findById(){
        return async (req,res,next) => {
            const userId = req.userData.id;
            const contactId = req.params.id;
            const contact = await Contact.findOne({
                where: {id: contactId, user_id: userId}
            });
            const resp = {success: false, contact: null};
            if(contact){
                resp.success = true;
                resp.contact = contact
            }
            res.status(200).json(resp);
        }
    }
    update(){
        return async (req,res,next) => {
            const contactId = req.params.id;
            const userId = req.userData.id;
            const resp = {success: false, contact: null, msg: "Contact not found"};
            const contact = await Contact.findOne({
                where: {id: contactId, user_id: userId}
            });
            if(contact){
                const vals = {
                    fname: req.body.fname,
                    lname: req.body.lname,
                    email: req.body.email,
                    phone: req.body.phone
                };
                await contact.update(vals, {where: {id: contactId}});
                await contact.reload();
                resp.success = true;
                resp.msg = "Contact Update.";
                resp.contact = contact;
             }
            res.status(200).json(resp);
        }
    }
    delete(){
        return async (req,res,next) => {
            const contactId = req.params.id;
            const userId = req.userData.id;
            const contact = await Contact.findOne({
                where: {id: contactId, user_id: userId}
            });
            const resp = {success: false, msg: "Contact not found"};
            if(contact){
                await contact.destroy();
                resp.success = true;
                resp.msg = "contact deleted"
            }
            res.status(200).json(resp);
        }
    }

}

module.exports = new ContactsController();
