var express=require('express');
var app=express();

app.use(express.json());
app.use(express.urlencoded(({extended:true})))

app.use(express.static(__dirname+"/public"));

app.use('/',express.static(__dirname+"/public/html"));

app.use('/api',require('./routes/api').route);

app.listen('4000',function(){
console.log("server started at port 4000");
});
