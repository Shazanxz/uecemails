const express = require('express');
const path = require('path');
const D = require('./public/js/data.js');

const app = express();
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

app.get('/api/professores', (req, res) =>
  res.json(D.professores.map(([titulo, nome, email, obs]) => ({ titulo, nome, email, obs: obs || null }))));

app.get('/api/setores', (req, res) =>
  res.json(D.setores.map(([nome, descricao, email, grupo]) => ({ nome, descricao, email, grupo }))));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('UECEmails em http://localhost:' + port));
