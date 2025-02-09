const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
