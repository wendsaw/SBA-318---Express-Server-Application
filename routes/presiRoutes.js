const express= require("express")
const router=express.Router();
const presidents = require('../models/presidents');
const presiFile=require("../models/presidentfile");


router.get('/', (req, res) => {

    res.render('read', { title: 'All President', presidents });
})
router.get('/create', (req, res) => {

    res.render('create', { title: "New President" });
})
router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id);

    const presi = presidents.find(c => c.id === parseInt(req.params.id))

    console.log(presi);

    res.render('details', { title: "president details", presi })
})

router.post('/', (req, res) => {

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

router.put('/:id', (req, res) => {
    presidents.id
    presidents.rank
    presidents.lastName
    presidents.firstName
    presidents.title
    presidents.content

    res.send('update')

}) 

router.delete('/:id', (req, res) => {

    const newPesidents = presidents.splice(req.params.id, 1);
    console.log("deleted president");


})

module.exports=router;