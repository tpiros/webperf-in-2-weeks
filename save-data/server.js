const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  let saveData = false;
  if (req.headers['save-data']) {
    saveData = true;
  }
  return res.render('index', { saveData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
