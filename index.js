const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Hello");
});
const PORT = process.env.PORT;
app.listen(5000)
