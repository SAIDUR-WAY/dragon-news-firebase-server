const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

const category = require('./data/category.json');
const news = require('./data/news.json');

app.get('/', (req, res)=>{
     res.send('dragon is running');
})

app.use(cors())

app.get('/category', (req, res)=>{
     res.send(category)
})
app.get('/news', (req, res)=>{
     res.send(news)
})

app.get('/news/:id', (req, res)=>{
     const id = req.params.id;
     console.log(id)
     const perNews = news.find(n => n._id === id);
     res.send(perNews)
})

app.get('/category/:id', (req, res) =>{
     const id = parseInt(req.params.id)
     console.log(id)
     if(id == 0){
          res.send(news)
     }
     const perCategory = news.filter(n => parseInt(n.category_id) === id)
     res.send(perCategory)
})

app.listen(port, ()=>{
     console.log(`dragon server running port: ${port}`)
})