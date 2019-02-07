const express = require('express');
const app = express();
const port = 3000 || process.env.port;
const idx = require('./routes/main')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'hbs')
app.use('/', idx)

app.listen(port, ()=>console.log(`server listening on ${port}`))