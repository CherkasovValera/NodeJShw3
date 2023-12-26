const express = require('express');
const fs =require('fs');
const path = require('path');

let counter = JSON.parse(fs.readFileSync(path.join(__dirname,'counter.json'), 'utf-8'));
let count = JSON.parse(fs.readFileSync(path.join(__dirname,'count.json'), 'utf-8'));
console.log(`Главная страница кликалась  ${counter} раз`)
console.log(`Страница about кликалась  ${count} раз`)


const app = express();
app.get('/',(req,res)=> {
    res.send(`<h1> Главная страница</h1> <a href="/about">PageAbout</a> <p> На страницу заходили ${counter++} раз</p>`)
    fs.writeFileSync(path.join(__dirname,'counter.json'),JSON.stringify(counter,null,3));
});

app.get('/about',(req,res)=> {
    res.send(`<h1> Страница About</h1> <a href="/">Главная страница</a> <p> На страницу заходили ${count++} раз</p>`)
    fs.writeFileSync(path.join(__dirname,'count.json'),JSON.stringify(count,null,3));
})

app.listen(3000);
