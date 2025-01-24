// imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

//route imports
const todoRoutes = require('./routes/todoRoutes.js');

//setups
const app = express();
const PORT = 3001;

//database connection
connectDB();


//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});




//catch all route
app.get("*", (req, res) => {
    res.send("Invalid Route: 404");
});

//listener
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});