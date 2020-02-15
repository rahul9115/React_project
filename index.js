const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Hello");
});
app.listen(5000)
