const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const myDb = require('./config/mongoose');
app.use(expressLayouts);


app.use(express.static('./assets'));

//extract style and scripts from sub pages to the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');


//using the express Router using a middleware. it wil start this express Router before the server starts.
app.use('/', require('./routers'));

app.listen(port, function(err){
    if(err){
        console.log(`error while listening to the port: ${err}`);
        return;
    }
    console.log(`server is successfully running on the port: ${port}`);
});