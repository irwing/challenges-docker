const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const __ASSETS = '/src/assets';
const __VIEWS = '/src/views';

const app = express();

app.use(express.static(`${__dirname}${__ASSETS}/css`));
app.use(express.static(`${__dirname}${__ASSETS}/js`));

// return view html
app.get('/', (req, res) => {
  console.log('./src/views/index.html');
  res.sendFile(`${__dirname}${__VIEWS}/index.html`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
