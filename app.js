const { log } = require('console');
const express = require('express');
const { title } = require('process');
const morgan = require('morgan')
const app = express();
app.use(express.json());

const presiRoutes=require("./routes/presiRoutes")

app.listen(3000);

// view engine

app.set('view engine', 'ejs');
//middleware
app.use(express.static('public'));
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {


    res.render('home', { title: 'COMPLETE LIST OF ALL US PRESIDENT' });
})

app.use("/president",presiRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: "404" });
})