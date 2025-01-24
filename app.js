const { log } = require('console');
const express =require('express');
const { title } = require('process');
const morgan=require('morgan')
const app=express();
app.listen(3000);

// view engine

app.set('view engine', 'ejs');
//middleware
app.use(express.static('public'));
app.use(morgan('dev'))

const presidents=[
    {id:1,lastName:"Washington", firstName:"George", title:"First President"},
    {id:2,lastName:"Adams", firstName:"John", title:"Second President"},
    {lid:3,lastName:"Jefferson", firstName:"Thomas", title:"Third President"},
    {id:4,lastName:"Madison", firstName:"James", title:"Fourth President"},
    {id:5,lastName:"Trump", firstName:"Donald", title:"Current President"}
    
]

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

