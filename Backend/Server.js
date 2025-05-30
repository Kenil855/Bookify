const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes=require("./routes/userRoutes")
dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Specify the exact frontend origin
    credentials: true, // Allow credentials (cookies, etc.)
  }));
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
//  useNewUrlParser: true,
 // useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

// Routes
app.use('/', userRoutes);

const PORT=process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
