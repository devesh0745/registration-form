const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require("./config/mongoose");


//console.log("running")

app.use(express.urlencoded());


app.use(express.static('./assests'))

app.use(expressLayouts);

//Extract style and scripts from sub pages into the layout.
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Setting up view engine.
app.set('view engine','ejs');
app.set('views','./views');



app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){console.log(`Error in running server:${err}`)};
    console.log(`Server running on port:${port}`);
});
