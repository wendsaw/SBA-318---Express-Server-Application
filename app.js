const { log } = require('console');
const express =require('express');
const { title } = require('process');
const morgan=require('morgan')
const app=express();
const presidents=require('./models/presidents');

app.listen(3000);

// view engine

app.set('view engine', 'ejs');
//middleware
app.use(express.static('public'));
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}));

app.get('/president', (req ,res) =>{
    

    res.render('Read',{title:'All President', presidents});
})

app.post('/president',(req,res)=>{

    console.log(req.body.firstName);
    
    
    const presi= {
        id:presidents.length+1,
        lastName:req.body.lastName,
        firstName:req.body.firstName,
        title:req.body.title,
        content:req.body.note
    };
    presidents.push(presi);

    console.log(presidents);

    res.redirect('/president')
    
})

app.get('/president/:id',(req,res)=>{
    const id=req.params.id
    console.log(id);
    
   const presi= presidents.find(c=> c.id===parseInt(req.params.id))
    

    if (!presidents) res.status(404).send('president not found');
    res.render('details',{presidents:presi, title:"The president"});
})

app.get('/president/create', (req ,res) =>{
    res.render('create',{title:"New President"});
})




app.get('/president/update', (req ,res) =>{
    res.render('Update',{title:"Update"});
})

app.get('/president/delete', (req ,res) =>{
    res.render('Delete',{title:"Delete President"});
})

app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})

