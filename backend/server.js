const express = require("express");
const { chats } = require("./data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require("./middleware/errorMiddleware");


const app = express();
dotenv.config();

connectDB();

const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.use(express.json());// to accept json data from frontend

app.get('/', (req, res) => {
    res.send("API is running");
});

app.use('/api/user', userRoutes);

app.use(notFound)
app.use(errorHandler)




