const express= require("express")
const router=express.Router();
const presidents = require('../models/presidents');
const presiFile=require("../models/presidentfile");

router.get('/', (req, res) => {

    res.render('read', { title: 'All President', presidents });
})

router.get('/create', (req, res) => {

    res.render('create', { title: "New President",presidents });
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id);

    const presi = presidents.find(c => c.id === parseInt(req.params.id))
    const presiLife = presiFile.find(c => c.id === parseInt(req.params.id))

    console.log(presi);

    res.render('details', { title: "president details", presi,presiLife })
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

    const presiDetail=presidents.find(c=> c.id===parseInt(req.params.id))
    if (!presiDetail) res.status(404).send('course not found');
    
    presidents.content=req.body.content

    res.send(`${presiDetail} update` )

}) 

router.delete('/:id', (req, res) => {

    const newPesidents = presidents.splice(req.params.id, 1);
    console.log("deleted president");


})

module.exports=router;