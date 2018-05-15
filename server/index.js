const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const sanitalize = (string) => string.replace(/[.,\/?!;:\-_ ]/g, '');

const reverse = (string) =>
  string
    .split('')
    .reverse()
    .join('');

const checkPalindrome = (req, res) => {
  const {text} = req.body;
  const sanitalized = sanitalize(text.toLowerCase());
  const reversed = reverse(sanitalized);

  sanitalized === reversed ? res.sendStatus(200) : res.sendStatus(400);
};

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.options('*', cors());

app.get('/', (req, res) => res.send('Nothing here'));

app.post('/check-palindrome', checkPalindrome);

app.listen(3000);
