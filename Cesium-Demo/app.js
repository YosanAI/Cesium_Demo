import express from 'express';
import * as path from 'path';

const app = express()
const port = 3000
const __dirname = path.resolve();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})