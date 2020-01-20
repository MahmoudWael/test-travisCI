const express = require('express');
const app = express();
const PORT = 3000;

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json("Aws pipeline!");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});