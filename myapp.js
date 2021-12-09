//http://localhost:3000/
const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
const port = 3000;
const router = express.Router();
const dirname = 'C:/Users/test/Desktop/Tin/Labs/Assignment8/TIN08B';
app.use('/', router);
app.set('view engine', 'pug');
app.use(express.json()); // for json
   app.use(express.urlencoded({ extended: true }));

router.get('/hello', (req, res) => {
  res.send('Hello World!');
})

router.get('/form', (req, res) => {
  res.sendFile(path.join(dirname+'/form.html'));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})


app.post('/formdata', function (req, res) {
  res.render(path.join(dirname+'/data_template.pug'), {  firstname: req.body.fname, lastname: req.body.lname, email: req.body.email });
     
})
app.post('/jsondata', (req, res) => {
 // req.body; // JavaScript object containing the parse JSON
  console.log(req.body);
    res.render(path.join(dirname+'/data_template.pug'), {  firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email });
})









