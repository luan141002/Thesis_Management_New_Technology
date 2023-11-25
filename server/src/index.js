const cors = require('cors');
const express = require('express');
require('dotenv').config();
require('./configs/db/connect');
const route = require('./routes');
const PORT = process.env.PORT || 8000;
const app = express();

// handle data from client which have URL-encoded type
app.use(express.urlencoded({extended: true}));
// handle data from client which have json type
app.use(express.json());

app.use(cors());


route(app);

app.listen(PORT , ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});