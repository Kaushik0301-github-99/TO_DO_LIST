const express = require('express');

const app = express();
const port = 8001;

app.listen(port,function(err){
    if(err){
        console.log("the todo-list has been not added");
    }
    console.log("the todo -list has been setted up");
});