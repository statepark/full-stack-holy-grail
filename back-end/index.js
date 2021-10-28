const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world!');
});

//consume functions from database.js
//if we get data at dataKey
//   :  enables a wildcard value
//req.params enables us to use url parameters here

app.get('/data/:dataKey', async (req, res) => {
    const { dataKey } = req.params;
    const data = await database.getData(dataKey);
    res.send(data);
});

app.post('/data/:dataKey', async (req, res) => {
    const { dataKey } = req.params;
    const { newValue } = req.body;
    database.setData(dataKey, newValue);
    res.sendStatus(200);
});


app.listen(3001, () => {
    console.log('Back end app is listening on port 3001!');
});

