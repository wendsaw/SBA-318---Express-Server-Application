const express =require('express');
const { title } = require('process');
const app=express();
app.listen(3000);

// view engine

app.set('view engine', 'ejs');

app.get('/', (req ,res) =>{
    const employees=[
        {lastName:"Trump", firstName:"Donald", title:"current president"},
        {lastName:"Trump", firstName:"Donald", title:"current president"},
        {lastName:"Trump", firstName:"Donald", title:"current president"},
        {lastName:"Trump", firstName:"Donald", title:"current president"}
        
    ]
    res.render('index',{title:'Home', employees});
})

app.get('/about', (req ,res) =>{
    res.render('about',{title:"About"});
})
app.get('/create', (req ,res) =>{
    res.render('create',{title:"Create new employee"});
})
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})