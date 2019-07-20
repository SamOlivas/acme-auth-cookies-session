const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(express.json())

app.get('/', (req,res,next) => {
  res.sendFile(path.join(__dirname,'index.html'))
});
app.post('/api/sessions', (req,res,next) => {
  res.status(204).send('TBC')
});

const PORT = '3000';
app.listen(PORT)

module.exports = app
