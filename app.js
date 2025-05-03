const express = require('express');
const mongoose = require('mongoose');
const app = express();

const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/rbac-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Use Helmet to set secure HTTP headers
app.use(helmet());

// Use Morgan for request logging
app.use(morgan('dev')); // or 'combined' for detailed logs

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Parse JSON
app.use(express.json());

// Your routes here
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
