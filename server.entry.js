const express = require('express');
const render = require('./server/render').default;

const app = express();

app.use(express.static('build'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  render(res);
});

app.listen(3000, () => {
  console.log(`Server on Port: 3000`);
});
