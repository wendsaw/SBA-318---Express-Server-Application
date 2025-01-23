const express =require('express');
const app=express();
app.listen(3000);

// view engine

app.set('view engine', 'ejs');

app.get('/', (req ,res) =>{
    res.render('index');
})
app.get('/about', (req ,res) =>{
    res.render('about');
})
app.get('/create', (req ,res) =>{
    res.render('create');
})
app.use((req,res)=>{
    res.status(404).render('404');
})