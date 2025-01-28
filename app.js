
const express = require('express');
const morgan = require('morgan')
const app = express();
app.use(express.json());
const presiRoutes=require("./routes/presiRoutes")

// view engine

app.set('view engine', 'ejs');
//middleware

app.use(express.static("./public"));
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));

//routes

app.get('/', (req, res) => {


    res.render('home', { title: 'COMPLETE LIST OF ALL US PRESIDENT' });
})

app.use("/president",presiRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: "404" });
})

app.listen(3000);