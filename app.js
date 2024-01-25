// ejs template example

const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const users = [
  {
    name: 'Tedy',
    age: 20,
    species: 'student',
  },
  {
    name: 'Adam',
    age: 32,
    species: 'worker',
  },
];

app.get('/', (req, res) => {
  res.render('index', { users });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));