const express= require("express")
const router=express.Router();
const presidents = require('../models/presidents');


router.get('/president', (req, res) => {


    res.render('read', { title: 'All President', presidents });
})
router.get('/president/create', (req, res) => {

    res.render('create', { title: "New President" });
})
router.get('/president/:id', (req, res) => {
    const id = req.params.id
    console.log(id);

    const presi = presidents.find(c => c.id === parseInt(req.params.id))

    console.log(presi);

    res.render('details', { title: "president details", presi })
})

router.post('/president', (req, res) => {

    console.log(req.body.firstName);

    const presi = {
        id: presidents.length + 1,
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        title: req.body.title,
        content: req.body.note
    };
    presidents.push(presi);

    console.log(presidents);

    res.redirect('/president')

})

router.put('/president/:id', (req, res) => {
    presidents.id
    presidents.rank
    presidents.lastName
    presidents.firstName
    presidents.title
    presidents.content
    // presidents.name=req.body.name;
    //  console.log(req.body);

})

router.delete('/president/:id', (req, res) => {

    const newPesidents = presidents.splice(req.params.id, 1);
    console.log("deleted president");


})

module.exports=router;