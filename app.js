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



app.get('/create', (req ,res) =>{
    res.render('create',{title:"New President"});
})

app.get('/', (req ,res) =>{
    

    res.render('Read',{title:'All President', presidents});
})

app.get('/update', (req ,res) =>{
    res.render('Update',{title:"Update"});
})

app.get('/delete', (req ,res) =>{
    res.render('Delete',{title:"Delete President"});
})

app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})

