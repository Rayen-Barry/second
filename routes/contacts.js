const express=require("express");
const router=express.Router();
const Contact = require("../models/Contact")

//test routing
router.get("/hello",(req,res)=>{
    res.send("hello routing");
});

// post contacts
// get all contacts
// get contact by ID
// delete contact by id 
// update contact by id 



// @Post method
// @desc post a contact 
// @path http://localhost:5000/api/contact/
// Params Body


router.post("/", (req, res)=>{
    console.log(req.body);
    res.send("post contact");
    const newContact = new Contact(req.body);
    newContact.save();
    

});

module.exports = router;