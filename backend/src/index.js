const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Example middleware function
const exampleMiddleware = (req, res, next) => {
    console.log('Example middleware executed');
    next(); // Call next to pass control to the next middleware or route handler
};

// Apply example middleware globally
app.use(exampleMiddleware);

// Routes
const userRoutes = require('./users/routes/userRoutes');
const productRoutes = require('./products/routes/productRoutes');
const orderRoutes = require('./orders/routes/orderRoutes');

// Apply routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
