const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public')); //IMP

app.get('/api/products', (req, res) => {
    res.json(JSON.parse((fs.readFileSync('products.json', 'utf8')))) //IMP
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
