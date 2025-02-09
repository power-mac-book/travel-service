// backend/server.js - Express.js Setup with ES Modules

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import documentRoutes from './routes/documentRoutes.js';


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.get('/', (req, res) => {
    res.send('Server is running...');
  });
  
// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Allow frontend requests
app.use(express.json());